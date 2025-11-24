import React, { useState } from 'react';
import { Monitor, Cpu, HardDrive, Keyboard, Mouse, ChevronRight, ChevronLeft, BookOpen, FileText, Presentation } from 'lucide-react';

const ComputerBasicsTeacher = () => {
  const [currentTopic, setCurrentTopic] = useState('intro');
  const [currentSlide, setCurrentSlide] = useState(0);

  const topics = {
    intro: {
      title: "What is a Computer?",
      icon: <Monitor className="w-16 h-16 text-blue-500" />,
      slides: [
        {
          title: "Welcome to Computer Basics!",
          content: "A computer is an electronic device that processes information. It can store, retrieve, and process data.",
          example: "Think of it like a very smart calculator that can do many tasks - from writing documents to playing games!"
        },
        {
          title: "What Can Computers Do?",
          content: "Computers help us with daily tasks:",
          list: [
            "Write documents and letters",
            "Browse the internet",
            "Watch videos and listen to music",
            "Create presentations",
            "Play games",
            "Send emails"
          ]
        }
      ]
    },
    components: {
      title: "Computer Components",
      icon: <Cpu className="w-16 h-16 text-purple-500" />,
      slides: [
        {
          title: "Main Parts of a Computer",
          content: "Every computer has several important parts that work together:",
          image: true
        },
        {
          title: "1. Monitor (Screen)",
          content: "The monitor is like a TV screen that shows you everything the computer is doing.",
          example: "It displays your documents, videos, games, and programs."
        },
        {
          title: "2. CPU (Brain)",
          content: "CPU stands for Central Processing Unit. It's the brain of the computer that does all the thinking and calculations.",
          example: "When you click something, the CPU processes your command instantly!"
        },
        {
          title: "3. Keyboard",
          content: "The keyboard lets you type letters, numbers, and symbols into the computer.",
          example: "You use it to write emails, documents, and search for things online."
        },
        {
          title: "4. Mouse",
          content: "The mouse helps you point, click, and select things on the screen.",
          example: "Move it on your desk, and the pointer moves on screen!"
        },
        {
          title: "5. Hard Drive (Storage)",
          content: "The hard drive is where all your files, photos, videos, and programs are stored.",
          example: "Think of it as a huge filing cabinet inside your computer."
        },
        {
          title: "6. RAM (Memory)",
          content: "RAM is temporary memory that helps your computer work on multiple things at once.",
          example: "More RAM means you can run more programs smoothly at the same time."
        }
      ]
    },
    generations: {
      title: "Computer Generations",
      icon: <HardDrive className="w-16 h-16 text-green-500" />,
      slides: [
        {
          title: "How Computers Evolved",
          content: "Computers have changed dramatically over the years. Let's look at the five generations:"
        },
        {
          title: "1st Generation (1940-1956)",
          content: "The first computers used vacuum tubes - large glass tubes that glowed.",
          features: [
            "Very large - filled entire rooms!",
            "Very hot and used lots of electricity",
            "Very expensive",
            "Example: ENIAC, UNIVAC"
          ]
        },
        {
          title: "2nd Generation (1956-1963)",
          content: "Computers started using transistors instead of vacuum tubes.",
          features: [
            "Smaller and more reliable",
            "Used less electricity",
            "Generated less heat",
            "Faster than first generation"
          ]
        },
        {
          title: "3rd Generation (1964-1971)",
          content: "Integrated Circuits (ICs) made computers even smaller.",
          features: [
            "Many transistors on a single chip",
            "Much smaller size",
            "More affordable",
            "Keyboards and monitors introduced"
          ]
        },
        {
          title: "4th Generation (1971-Present)",
          content: "Microprocessors brought computers to homes and offices.",
          features: [
            "Personal computers (PCs) were born",
            "Very small and affordable",
            "IBM PC, Apple Macintosh",
            "The generation we mostly use today"
          ]
        },
        {
          title: "5th Generation (Present-Future)",
          content: "Artificial Intelligence and advanced computing.",
          features: [
            "AI and machine learning",
            "Voice recognition",
            "Quantum computing research",
            "Even more powerful and intelligent"
          ]
        }
      ]
    },
    word: {
      title: "Microsoft Word",
      icon: <FileText className="w-16 h-16 text-blue-600" />,
      slides: [
        {
          title: "What is MS Word?",
          content: "Microsoft Word is a word processor - a program for creating and editing text documents.",
          example: "You can write letters, reports, resumes, and school assignments!"
        },
        {
          title: "Basic Features",
          content: "Key things you can do in Word:",
          list: [
            "Type and format text (bold, italic, underline)",
            "Change fonts and colors",
            "Insert pictures and tables",
            "Check spelling and grammar",
            "Save and print documents",
            "Create professional documents"
          ]
        },
        {
          title: "Getting Started",
          content: "When you open Word:",
          list: [
            "Start with a blank page",
            "The toolbar at top has all the tools",
            "Just start typing!",
            "Use 'File > Save' to save your work",
            "Give your document a name"
          ]
        },
        {
          title: "Formatting Text",
          content: "Make your text look nice:",
          list: [
            "Select text by clicking and dragging",
            "Click 'B' for Bold, 'I' for Italic",
            "Change font size from the dropdown",
            "Pick colors for your text",
            "Align text left, center, or right"
          ]
        },
        {
          title: "Useful Tips",
          content: "Pro tips for Word:",
          list: [
            "Ctrl+S saves your document",
            "Ctrl+Z undoes mistakes",
            "Ctrl+C copies, Ctrl+V pastes",
            "Save often to avoid losing work!",
            "Use spell-check (red underlines show errors)"
          ]
        }
      ]
    },
    powerpoint: {
      title: "Microsoft PowerPoint",
      icon: <Presentation className="w-16 h-16 text-orange-500" />,
      slides: [
        {
          title: "What is PowerPoint?",
          content: "PowerPoint is a presentation program that helps you create slideshows.",
          example: "Perfect for school projects, business presentations, and teaching!"
        },
        {
          title: "Why Use PowerPoint?",
          content: "PowerPoint helps you:",
          list: [
            "Present information visually",
            "Add pictures, videos, and animations",
            "Keep your audience engaged",
            "Organize your ideas on slides",
            "Share information clearly"
          ]
        },
        {
          title: "Understanding Slides",
          content: "A presentation is made of slides - like pages in a book.",
          example: "Each slide shows one main idea. You move from slide to slide during your presentation."
        },
        {
          title: "Creating a Presentation",
          content: "Steps to get started:",
          list: [
            "Open PowerPoint - choose a template or blank",
            "Each slide has a layout (title, content, etc.)",
            "Add text by clicking text boxes",
            "Insert images from 'Insert > Pictures'",
            "Add new slides with 'New Slide' button"
          ]
        },
        {
          title: "Making it Look Good",
          content: "Design tips:",
          list: [
            "Use consistent colors and fonts",
            "Don't put too much text on one slide",
            "Add pictures to make it interesting",
            "Use animations sparingly",
            "Choose a theme from the 'Design' tab"
          ]
        },
        {
          title: "Presenting Your Slideshow",
          content: "When you're ready to present:",
          list: [
            "Press F5 to start slideshow",
            "Click or press space to go to next slide",
            "Press Esc to exit slideshow",
            "Practice before the real presentation!",
            "Speak clearly and face your audience"
          ]
        }
      ]
    }
  };

  const topicKeys = Object.keys(topics);
  const currentTopicData = topics[currentTopic];
  const currentSlideData = currentTopicData.slides[currentSlide];
  const totalSlides = currentTopicData.slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const changeTopic = (topic) => {
    setCurrentTopic(topic);
    setCurrentSlide(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Computer Basics Learning Tool</h1>
          <p className="text-gray-600">Learn about computers in a simple and fun way!</p>
        </div>

        {/* Topic Selection */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {topicKeys.map((key) => (
            <button
              key={key}
              onClick={() => changeTopic(key)}
              className={`p-4 rounded-lg shadow-lg transition-all transform hover:scale-105 ${
                currentTopic === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              <div className="flex flex-col items-center">
                {topics[key].icon}
                <span className="mt-2 text-sm font-semibold">{topics[key].title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-xl shadow-2xl p-8 min-h-96">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentSlideData.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{currentSlideData.content}</p>

            {currentSlideData.list && (
              <ul className="space-y-2 ml-6">
                {currentSlideData.list.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {currentSlideData.features && (
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">Key Features:</h3>
                <ul className="space-y-2 ml-6">
                  {currentSlideData.features.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {currentSlideData.example && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <p className="text-gray-700">
                  <span className="font-semibold text-green-700">Example: </span>
                  {currentSlideData.example}
                </p>
              </div>
            )}

            {currentSlideData.image && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Monitor className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                  <p className="font-semibold">Monitor</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Cpu className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                  <p className="font-semibold">CPU</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Keyboard className="w-12 h-12 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Keyboard</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <Mouse className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                  <p className="font-semibold">Mouse</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <HardDrive className="w-12 h-12 text-red-500 mx-auto mb-2" />
                  <p className="font-semibold">Hard Drive</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <BookOpen className="w-12 h-12 text-indigo-500 mx-auto mb-2" />
                  <p className="font-semibold">RAM</p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            <div className="text-center">
              <p className="text-gray-600">
                Slide {currentSlide + 1} of {totalSlides}
              </p>
              <div className="flex gap-2 mt-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === totalSlides - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">Click on different topics above to learn more!</p>
        </div>
      </div>
    </div>
  );
};

export default ComputerBasicsTeacher;
