import { useState } from "react";
import { Question } from "@/data/examData";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswered: (isCorrect: boolean) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  hasAnswered: boolean;
}

const QuizQuestion = ({ 
  question, 
  questionNumber, 
  totalQuestions,
  onAnswered,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  hasAnswered: externalHasAnswered
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(externalHasAnswered);

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(index);
    setHasAnswered(true);
    
    const isCorrect = index === question.correctAnswer;
    onAnswered(isCorrect);
  };

  const getOptionStyles = (index: number) => {
    if (!hasAnswered) {
      return "bg-card border-border hover:border-primary hover:bg-primary/5 cursor-pointer";
    }

    if (index === question.correctAnswer) {
      return "bg-success/10 border-success text-success-foreground animate-pulse-success";
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-error/10 border-error text-error-foreground animate-shake";
    }

    return "bg-muted/50 border-border opacity-50";
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="animate-fade-in">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-card rounded-xl p-5 shadow-card mb-4">
        <h2 className="text-lg font-semibold text-foreground leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={hasAnswered}
            className={cn(
              "w-full p-4 rounded-xl border-2 transition-all duration-300 text-left flex items-start gap-3",
              getOptionStyles(index)
            )}
          >
            <span className={cn(
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm",
              !hasAnswered && "bg-muted text-muted-foreground",
              hasAnswered && index === question.correctAnswer && "bg-success text-success-foreground",
              hasAnswered && index === selectedAnswer && index !== question.correctAnswer && "bg-error text-error-foreground",
              hasAnswered && index !== selectedAnswer && index !== question.correctAnswer && "bg-muted text-muted-foreground"
            )}>
              {optionLabels[index]}
            </span>
            <span className="flex-1 font-medium">{option}</span>
            {hasAnswered && index === question.correctAnswer && (
              <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
            )}
            {hasAnswered && index === selectedAnswer && index !== question.correctAnswer && (
              <XCircle className="w-6 h-6 text-error flex-shrink-0" />
            )}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {hasAnswered && (
        <div className="mt-6 animate-slide-up">
          <div className={cn(
            "p-5 rounded-xl border-2",
            selectedAnswer === question.correctAnswer
              ? "bg-success/5 border-success/30"
              : "bg-warning/5 border-warning/30"
          )}>
            <div className="flex items-start gap-3">
              <Lightbulb className={cn(
                "w-5 h-5 flex-shrink-0 mt-0.5",
                selectedAnswer === question.correctAnswer ? "text-success" : "text-warning"
              )} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {selectedAnswer === question.correctAnswer ? "Correct! 🎉" : "Explanation"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="flex-1 h-12 rounded-xl border-2 border-border bg-card text-foreground font-medium transition-all duration-200 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="flex-1 h-12 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-200 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {questionNumber === totalQuestions ? "View Results" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
