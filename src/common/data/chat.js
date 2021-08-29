import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"

const chats = [
  {
    id: 1,
    roomId: 1,
    status: "online",
    image: avatar2,
    name: "John Howard",
    description: "Hey! there I'm available",
    time: "02 min",
    unreadmsg: 0
  },
  {
    id: 2,
    roomId: 2,
    status: "online",
    image: avatar2,
    name: "Galen Rizo",
    description: "I've finished it! See you so",
    time: "10 min",
    unreadmsg: 2
  },
  {
    id: 3,
    roomId: 3,
    status: "intermediate",
    image: avatar3,
    name: "Annie Holder",
    description: "Nice to meet you",
    time: "22 min",
  },
  {
    id: 4,
    roomId: 4,
    status: "offline",
    image: avatar4,
    name: "Jose Vickery",
    description: "Nice to meet you",
    time: "01 hr",
  },
  {
    id: 5,
    roomId: 5,
    status: "online",
    image: avatar5,
    name: "Vernon Smith",
    description: "Wow that's great",
    time: "04 Hrs",
  },
]

const groups = [
  { id: 1, image: "G", name: "General" },
  { id: 2, image: "D", name: "Designers" },
  { id: 3, image: "M", name: "Meeting" },
]

const contacts = [
  {
    category: "A",
    child: [
      { id: 1, name: "Adam Miller" },
      { id: 2, name: "Alfonso Fisher" },
    ],
  },
  {
    category: "B",
    child: [{ id: 1, name: "Bonnie Harney" }],
  },
  {
    category: "C",
    child: [
      { id: 1, name: "Charles Brown" },
      { id: 2, name: "Carmella Jones" },
      { id: 3, name: "Carrie Williams" },
    ],
  },
  {
    category: "D",
    child: [{ id: 4, name: "Dolores Minter" }],
  },
]

const messages = [
  {
    id: 1,
    roomId: 1,
    sender: "John Howard",
    message: "Good morning everyone !",
    createdAt: "2020-04-02T17:00:21.529Z",
  },
  {
    id: 2,
    roomId: 1,
    sender: "Marcus",
    message: "Good morning everyone !",
    createdAt: "2020-04-02T17:01:21.529Z",
  },
  {
    id: 3,
    roomId: 1,
    sender: "Galen Rizo",
    message: "Hello!",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 4,
    roomId: 1,
    sender: "Galen Rizo",
    message: "What about our next meeting?",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 5,
    roomId: 1,
    sender: "John Howard",
    message: "Next meeting tomorrow",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 6,
    roomId: 1,
    sender: "Marcus",
    message: "Wow that's great",
    createdAt: "2020-04-02T17:07:21.529Z",
  },

  {
    id: 4,
    roomId: 2,
    sender: "Adam Miller",
    message: "Hello!",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 5,
    roomId: 3,
    sender: "Keith Gonzales",
    message: "Hello!",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 6,
    roomId: 4,
    sender: "Jose Vickery",
    message: "Hello!",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 7,
    roomId: 5,
    sender: "Mitchel Givens",
    message: "Hello!",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 8,
    roomId: 6,
    sender: "Stephen Hadley",
    message: "Hello!",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 9,
    roomId: 7,
    sender: "Keith Gonzales",
    message: "Hello!",
    createdAt: "2020-04-02T17:07:21.529Z",
  },
]

export { chats, messages, contacts, groups }