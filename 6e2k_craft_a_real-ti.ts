// 6e2k_craft_a_real-ti.ts

interface IMessage {
  text: string;
  timestamp: number;
}

interface IIntent {
  name: string;
  keywords: string[];
}

class ChatbotParser {
  private intents: IIntent[] = [
    { name: 'greeting', keywords: ['hi', 'hello', 'hey'] },
    { name: 'goodbye', keywords: ['bye', 'see you later', 'goodbye'] },
  ];

  public parseMessage(message: IMessage): string {
    const lowerCaseText = message.text.toLowerCase();
    for (const intent of this.intents) {
      for (const keyword of intent.keywords) {
        if (lowerCaseText.includes(keyword)) {
          return `Intent detected: ${intent.name}`;
        }
      }
    }
    return 'Intent not detected';
  }
}

const chatbotParser = new ChatbotParser();

const testMessage: IMessage = { text: 'Hello, how are you?', timestamp: 1643723400 };
console.log(chatbotParser.parseMessage(testMessage)); // Output: Intent detected: greeting

const testMessage2: IMessage = { text: 'See you later!', timestamp: 1643723410 };
console.log(chatbotParser.parseMessage(testMessage2)); // Output: Intent detected: goodbye

const testMessage3: IMessage = { text: 'What is the weather like?', timestamp: 1643723420 };
console.log(chatbotParser.parseMessage(testMessage3)); // Output: Intent not detected