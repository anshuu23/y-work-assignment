// lib/chatData.ts
export type Message = {
  id: string;
  text: string;
  time: string;
  type: 'received' | 'sent';
};

export type Contact = {
  id: string;
  name: string;
  avatar: string;
  messages: Message[];
};

export const dummyChatData: Contact[] = [
  {
    id: '1',
    name: 'Riya Patel',
    avatar: 'RP',
    messages: [
      { id: 'm1', text: 'Hey!', time: '10:00 AM', type: 'received' },
      { id: 'm2', text: 'Hi, Riya!', time: '10:01 AM', type: 'sent' },
      { id: 'm3', text: 'How are you?', time: '10:02 AM', type: 'sent' },
      { id: 'm4', text: 'I’m good! You?', time: '10:03 AM', type: 'received' },
      { id: 'm5', text: 'All well.', time: '10:04 AM', type: 'sent' }
    ]
  },
  {
    id: '2',
    name: 'Aryan Shah',
    avatar: 'AS',
    messages: [
      { id: 'm6', text: 'Let’s meet?', time: '9:00 AM', type: 'received' },
      { id: 'm7', text: 'Sure.', time: '9:01 AM', type: 'sent' },
      { id: 'm8', text: 'When?', time: '9:02 AM', type: 'received' },
      { id: 'm9', text: 'Evening works.', time: '9:03 AM', type: 'sent' },
      { id: 'm10', text: 'Okay, see you then!', time: '9:04 AM', type: 'received' }
    ]
  },
  {
    id: '3',
    name: 'Sneha Joshi',
    avatar: 'SJ',
    messages: [
      { id: 'm11', text: 'Finished the assignment?', time: '8:45 AM', type: 'received' },
      { id: 'm12', text: 'Almost done!', time: '8:46 AM', type: 'sent' },
      { id: 'm13', text: 'Need help?', time: '8:47 AM', type: 'received' },
      { id: 'm14', text: 'Yeah, maybe with the last part.', time: '8:48 AM', type: 'sent' },
      { id: 'm15', text: 'Okay, send it.', time: '8:49 AM', type: 'received' },
      { id: 'm16', text: 'Just sent.', time: '8:50 AM', type: 'sent' }
    ]
  },
  {
    id: '4',
    name: 'Vikram Desai',
    avatar: 'VD',
    messages: [
      { id: 'm17', text: 'Game tonight?', time: '7:00 PM', type: 'received' },
      { id: 'm18', text: 'Absolutely!', time: '7:01 PM', type: 'sent' },
      { id: 'm19', text: 'Bring your controller.', time: '7:02 PM', type: 'received' },
      { id: 'm20', text: 'Already packed.', time: '7:03 PM', type: 'sent' },
      { id: 'm21', text: 'Good, see you.', time: '7:04 PM', type: 'received' }
    ]
  },
  {
    id: '5',
    name: 'Tanvi Mehta',
    avatar: 'TM',
    messages: [
      { id: 'm22', text: 'What’s the plan for tomorrow?', time: '11:15 AM', type: 'received' },
      { id: 'm23', text: 'We’ll figure it out.', time: '11:16 AM', type: 'sent' },
      { id: 'm24', text: 'Late breakfast?', time: '11:17 AM', type: 'received' },
      { id: 'm25', text: 'Sounds great.', time: '11:18 AM', type: 'sent' },
      { id: 'm26', text: 'Awesome!', time: '11:19 AM', type: 'received' }
    ]
  },
  {
    id: '6',
    name: 'Aditya Verma',
    avatar: 'AV',
    messages: [
      { id: 'm27', text: 'Send me the files.', time: '3:20 PM', type: 'received' },
      { id: 'm28', text: 'On it.', time: '3:22 PM', type: 'sent' },
      { id: 'm29', text: 'Waiting...', time: '3:23 PM', type: 'received' },
      { id: 'm30', text: 'Uploading now.', time: '3:24 PM', type: 'sent' },
      { id: 'm31', text: 'Got them. Thanks!', time: '3:25 PM', type: 'received' }
    ]
  },
  {
    id: '7',
    name: 'Neha Singh',
    avatar: 'NS',
    messages: [
      { id: 'm32', text: 'Lunch?', time: '1:00 PM', type: 'received' },
      { id: 'm33', text: 'Sure, where?', time: '1:02 PM', type: 'sent' },
      { id: 'm34', text: 'Pizza Hut?', time: '1:03 PM', type: 'received' },
      { id: 'm35', text: 'Let’s go.', time: '1:04 PM', type: 'sent' }
    ]
  },
  {
    id: '8',
    name: 'Rohan Mehta',
    avatar: 'RM',
    messages: [
      { id: 'm36', text: 'Update me on the task.', time: '5:30 PM', type: 'received' },
      { id: 'm37', text: 'Halfway done.', time: '5:32 PM', type: 'sent' },
      { id: 'm38', text: 'ETA?', time: '5:33 PM', type: 'received' },
      { id: 'm39', text: '1 hour max.', time: '5:34 PM', type: 'sent' },
      { id: 'm40', text: 'Perfect.', time: '5:35 PM', type: 'received' }
    ]
  },
  {
    id: '9',
    name: 'Kavya Iyer',
    avatar: 'KI',
    messages: [
      { id: 'm41', text: 'Call me when free.', time: '6:10 PM', type: 'received' },
      { id: 'm42', text: 'Give me 10 mins.', time: '6:12 PM', type: 'sent' },
      { id: 'm43', text: 'Sure.', time: '6:13 PM', type: 'received' },
      { id: 'm44', text: 'Calling now.', time: '6:22 PM', type: 'sent' }
    ]
  },
  {
    id: '10',
    name: 'Yash Raj',
    avatar: 'YR',
    messages: [
      { id: 'm45', text: 'Movie plan?', time: '4:00 PM', type: 'received' },
      { id: 'm46', text: 'Let’s go!', time: '4:01 PM', type: 'sent' },
      { id: 'm47', text: 'Book tickets.', time: '4:02 PM', type: 'received' },
      { id: 'm48', text: 'Done.', time: '4:03 PM', type: 'sent' },
      { id: 'm49', text: 'Excited!', time: '4:04 PM', type: 'received' }
    ]
  }
];

export const randomMessages = [
  "Hey! How's your day going?",
  "I'll be there in 10 minutes.",
  "Did you check the docs I sent?",
  "Can we reschedule our meeting?",
  "LOL that was hilarious 😂",
  "Sure, let me get back to you.",
  "Not sure, let me ask someone.",
  "I'm almost done with the task.",
  "Bro, this bug is killing me 😩",
  "You free for a call now?",
  "Let's catch up this weekend.",
  "I'll send the files tonight.",
  "Yes, looks good to me!",
  "No worries, take your time.",
  "Wait, what do you mean by that?",
  "Give me a sec, I'm checking.",
  "Wow, that's actually impressive!",
  "I thought you already pushed it?",
  "Just deployed the latest build.",
  "Why isn't this working??? 😤",
  "Same here, I’m stuck on it too.",
  "It’s not urgent, relax.",
  "Thanks, I owe you one!",
  "This UI looks super clean 🔥",
  "On my way!",
];



