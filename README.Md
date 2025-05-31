# Matshwao (Botswana Driver's Theory Test) As JavaScript Objects

A TypeScript-based project that transforms static PDF Matshwao (Botswana driver's theory test) content into a structured JavaScript object with full type safety.

## 🎯 Purpose

The original Matshwao (Botswana driver's theory test) content exists as a static PDF that cannot be modified or programmatically accessed. This project bridges that gap by converting the PDF content into a flexible, type-safe JavaScript object that can be used to build interactive driver's theory test applications.

During the early stages of developing my app, [THEORY](https://theory.co.bw). I realized that the original content from the PDF was not easily accessible or modifiable. As a result, I created this project to bridge that gap. Now anyone can use this content in their own applications without going through the hassle of extracting the content from the PDF.

## 🏗️ Data Structure

The content is structured using TypeScript interfaces for maximum type safety:

```typescript
export type Chapter = {
  topicID: string;
  topic: string;
  content: {
    id: number;
    question: string;
    img?: string;
    answers: {
      text: string;
      isCorrect: boolean;
    }[];
  }[];
};
```

Each chapter represents a topic area with multiple questions, where each question can optionally include an image and contains multiple choice answers with correct answers and wrong answers.

## 📁 Project Structure

```
├── Book/
│   ├── chapters/           # Question and answer data files
│   ├── question-images/    # Associated question images
│   └── types.ts           # TypeScript type definitions
```

- **`Book/chapters/`** - Contains all questions and answers organized by topic
- **`Book/question-images/`** - Stores images referenced by questions
- **`Book/types.ts`** - TypeScript type definitions ensuring data consistency

## 🚀 Features

- **Type Safety** - Full TypeScript support with strict typing
- **Structured Data** - Well-organized content hierarchy by topics and questions
- **Image Support** - Optional images for visual questions
- **Multiple Choice** - Support for multiple choice answers with correct answer tracking
- **Easy Integration** - Simple JavaScript object format for easy consumption

## 💡 Use Cases

- Build theory test practice applications
- Create educational quiz platforms
- Develop study tools and flashcard apps
- Generate practice tests with scoring
- Create mobile learning applications
- Build custom assessment tools

## 🛠️ Getting Started

Clone the repository:
```bash
git clone 
cd theory-test-data
```

## 🤝 Contributing

Contributions are welcome! Whether you want to:
- Add more questions
- Improve data structure
- Fix errors in existing content
- Enhance TypeScript definitions
- Add new features

Please feel free to open an issue or submit a pull request.

---

**Note**: This project transforms copyrighted content. Please ensure you have appropriate permissions for the source material in your before using this data commercially.