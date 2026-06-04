const commentsData = [
  {
    id: 1,
    user: "Anirudh",
    text: "This React tutorial is amazing!",
    likes: 125,
    replies: [
      {
        id: 2,
        user: "Rahul",
        text: "Totally agree. The Redux part was very clear.",
        likes: 42,
        replies: [
          {
            id: 3,
            user: "Meera",
            text: "Did you understand the middleware section?",
            likes: 12,
            replies: [
              {
                id: 4,
                user: "Rahul",
                text: "Yes, but I had to watch it twice.",
                likes: 8,
                replies: [
                  {
                    id: 5,
                    user: "Meera",
                    text: "Same here 😂",
                    likes: 5,
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        user: "Suresh",
        text: "Can someone share the GitHub repository?",
        likes: 15,
        replies: [
          {
            id: 7,
            user: "Arjun",
            text: "Check the description below the video.",
            likes: 9,
            replies: [],
          },
        ],
      },
    ],
  },

  {
    id: 8,
    user: "Priya",
    text: "The search suggestion caching explanation was fantastic.",
    likes: 90,
    replies: [
      {
        id: 9,
        user: "Kiran",
        text: "LRU Cache would be a good next topic.",
        likes: 25,
        replies: [
          {
            id: 10,
            user: "Priya",
            text: "Yes! I was just thinking about that.",
            likes: 11,
            replies: [
              {
                id: 11,
                user: "Deepak",
                text: "I implemented an LRU cache using Map.",
                likes: 18,
                replies: [
                  {
                    id: 12,
                    user: "Kiran",
                    text: "Map + Doubly Linked List?",
                    likes: 7,
                    replies: [
                      {
                        id: 13,
                        user: "Deepak",
                        text: "Exactly! O(1) for both get and put.",
                        likes: 6,
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 14,
    user: "Neha",
    text: "Can anyone explain useCallback with a simple example?",
    likes: 34,
    replies: [
      {
        id: 15,
        user: "Vishnu",
        text: "It memoizes a function so it isn't recreated on every render.",
        likes: 28,
        replies: [
          {
            id: 16,
            user: "Neha",
            text: "How is that different from useMemo?",
            likes: 9,
            replies: [
              {
                id: 17,
                user: "Vishnu",
                text: "useMemo memoizes a value, useCallback memoizes a function.",
                likes: 14,
                replies: [
                  {
                    id: 18,
                    user: "Neha",
                    text: "Now it makes sense. Thanks!",
                    likes: 5,
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 19,
    user: "Akash",
    text: "Who's building a YouTube clone along with this series?",
    likes: 203,
    replies: [
      {
        id: 20,
        user: "Akhil",
        text: "Me 🙋‍♂️",
        likes: 35,
        replies: [],
      },
      {
        id: 21,
        user: "Sandra",
        text: "I'm currently working on the watch page.",
        likes: 27,
        replies: [
          {
            id: 22,
            user: "Akash",
            text: "Have you implemented live chat yet?",
            likes: 8,
            replies: [
              {
                id: 23,
                user: "Sandra",
                text: "Not yet. Planning to use polling first.",
                likes: 6,
                replies: [
                  {
                    id: 24,
                    user: "Akhil",
                    text: "WebSockets would be better for real-time updates.",
                    likes: 11,
                    replies: [
                      {
                        id: 25,
                        user: "Sandra",
                        text: "Good idea. I'll try Socket.IO.",
                        likes: 4,
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default commentsData