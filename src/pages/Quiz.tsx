import { useState } from "react";
import { ArrowLeft, RotateCcw, Trophy, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getSubjectById, getQuestionsForSubject } from "@/data/examData";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Quiz = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectId ? getSubjectById(subjectId) : null;
  const questions = subjectId ? getQuestionsForSubject(subjectId) : [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  if (!subject) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pb-20">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-foreground mb-2">Subject not found</h1>
          <Link to="/subjects" className="text-primary hover:underline">
            Browse all subjects
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setAnswered(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setQuizComplete(false);
  };

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link to="/subjects" className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-foreground">{subject.name}</h1>
            <p className="text-xs text-muted-foreground">
              {!quizComplete ? `Question ${currentQuestion + 1} of ${questions.length}` : "Quiz Complete"}
            </p>
          </div>
          <div className="text-right mr-2">
            <span className="text-sm font-medium text-primary">Score: {score}</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="px-4 py-4 max-w-lg mx-auto">
        {!quizComplete ? (
          <>
            <QuizQuestion
              key={questions[currentQuestion].id}
              question={questions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              onAnswered={handleAnswer}
              onNext={handleNext}
              onPrevious={handlePrevious}
              canGoNext={true}
              canGoPrevious={currentQuestion > 0}
              hasAnswered={answered}
            />
          </>
        ) : (
          <div className="animate-scale-in">
            <div className="text-center py-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Trophy className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Quiz Complete!</h2>
              <p className="text-muted-foreground mb-6">
                You've finished the {subject.name} quiz
              </p>

              <div className="bg-card rounded-xl p-6 border border-border shadow-card mb-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-muted-foreground mb-4">Correct Answers</p>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">{percentage}% accuracy</p>
              </div>

              <div className="space-y-3">
                <Button onClick={handleRestart} className="w-full h-12 text-base">
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>
                <Link to="/subjects">
                  <Button variant="outline" className="w-full h-12 text-base">
                    Choose Another Subject
                  </Button>
                </Link>
                <a 
                  href="https://forms.google.com/your-form-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="outline" 
                    className="w-full h-12 text-base bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-none"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Get PDF
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
