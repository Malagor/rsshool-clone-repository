const taskList = [
  {
    mission: 'Select the wagons',
    title: 'Type Selector',
    subtitle: 'Select elements by their type',
    syntax: 'A',
    description: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <strong>&lt;div&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;ul&gt;</strong> are all different element types.',
    examples: [
      '<strong>div</strong> selects all <strong>&lt;div&gt;</strong> elements.',
      '<strong>p</strong> selects all <strong>&lt;p&gt;</strong> elements.'],
    answers: ['wagon'],
    level: 1,
    done: true,
    code: [
      {
        tag: "wagon",
        id: "moving",
        classes: ["green"]
      },
      {
        tag: "wagon",
        child: [
          {
            tag: "wood",
            classes: ["yellow"],
            child: [
              {
                tag: 'sand'
              }
            ]
          },
        ]
      },
      {
        tag: "wagon"
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select the platform',
    title: 'Type Selector',
    subtitle: 'Select elements by their type',
    syntax: 'A',
    description: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <strong>&lt;div&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;ul&gt;</strong> are all different element types.',
    examples: [
      '<strong>div</strong> selects all <strong>&lt;div&gt;</strong> elements.',
      '<strong>p</strong> selects all <strong>&lt;p&gt;</strong> elements.'],
    answers: ['platform'],
    level: 2,
    code: [
      {
        tag: "wagon",
        id: "moving",
        classes: ["green"]
      },
      {
        tag: "wagon",
      },
      {
        tag: "wagon"
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select the moving wagon',
    title: 'ID Selector',
    subtitle: 'Select elements with an ID',
    syntax: '#id',
    description: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples: [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects ul <strong>id="long"</strong>'],
    answers: ['wagon#moving', '#moving'],
    level: 3,
    code: [
      {
        tag: "wagon",
        child: [
          {
            tag: "wood",
            classes: ["yellow"],
            child: [
              {
                tag: 'tent',
                child: [
                  {
                    tag: 'sand'
                  }
                ]
              }
            ]
          },
          {
            tag: "rocks"
          }
        ]
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select the wood on the platform',
    title: 'Descendant Selector',
    subtitle: 'Select an element inside another element',
    syntax: 'A B',
    description: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
    examples: [
      '<strong>p  strong</strong> selects all <strong>&lt;strong&gt;</strong> elements that are inside of any <strong>&lt;p&gt;</strong>',
      '<strong>#fancy  span</strong> selects any <strong>&lt;span&gt;</strong> elements that are inside of the element with <strong>id="fancy"</strong>'],
    answers: ['wagon#green', '#green'],
    level: 4,
    code: [
      {
        tag: "wagon",
        id: "moving",
        classes: ["green"]
      },
      {
        tag: "wagon",
        child: [
          {
            tag: "wood",
            classes: ["yellow"],
            child: [
              {
                tag: 'tent',
                child: [
                  {
                    tag: 'sand'
                  }
                ]
              }
            ]
          },
          {
            tag: "rocks"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select the wood on the moving platform',
    title: 'Combine the Descendant & ID Selectors',
    subtitle: 'Select an element inside another element',
    syntax: '#id  A',
    description: 'You can combine any selector with the descendent selector.',
    examples: [
      '<stong>#cool span</stong> selects all <stong>&lt;span&gt;</stong> elements that are inside of elements with <stong>id="cool"</stong>'],
    answers: ['#moving wood'],
    level: 5,
    code: [
      {
        tag: "wagon",
        child: [
          {
            tag: "wood",
            classes: ["yellow"]
          },
          {
            tag: "rocks"
          }
        ]
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      },
      {
        tag: 'wagon'
      }
    ]
  },
  {
    mission: 'Select the small apples',
    title: 'Class Selector',
    subtitle: 'Select elements by their class',
    syntax: '.classname',
    description: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples: [
      '<stong>.neato</stong> selects all elements with <stong>class="neato"</stong>'],
    answers: ['#moving wood'],
    level: 6,
    code: [
      {
        tag: "platform",
        child: [
          {
            tag: "wood",
            classes: ["yellow"],
          },
        ]
      },
      {
        tag: "wagon",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select the small oranges',
    title: '',
    subtitle: 'Combine the Class Selector',
    syntax: 'A.className',
    description: 'You can combine the class selector with other selectors, like the type selector.',
    examples: [
      '<stong>ul.important</stong> selects all <stong>&lt;ul&gt;</stong> elements that have <stong>class="important"</stong>',
      '<stong>#big.wide<stong> selects all elements with <stong>id="big"<stong> that also have <stong>class="wide"<stong>'
    ],
    answers: ['#moving wood'],
    level: 7,
    code: [
      {
        tag: "platform",
        id: "brown",
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "sand",
            id: "searocks"
          }
        ]
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select the small oranges in the bentos',
    title: '',
    subtitle: 'You can do it...',
    syntax: 'Put your back into it!',
    description: 'Combine what you learned in the last few levels to solve this one!',
    examples: [],
    answers: ['#moving wood'],
    level: 8,
    code: [
      {
        tag: "wagon",
        id: "brown",
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      },
      {
        tag: "wagon",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select all the plates and bentos',
    title: 'Comma Combinator',
    subtitle: 'Combine, selectors, with... commas!',
    syntax: 'A, B',
    description: 'Thanks to Shatner technology, this selects all <stong>A</stong> and <stong>B</stong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
      '<stong>p, .fun</stong> selects all <stong>&lt;p&gt;</stong> elements as well as all elements with <stong>class="fun"</stong>',
      '<stong>a, p, div</stong> selects all <stong>&lt;a&gt;</stong>, <stong>&lt;p&gt;</stong> and <stong>&lt;div&gt;</stong> elements'
    ],
    answers: ['#moving wood'],
    level: 9,
    code: [
      {
        tag: "platform",
        id: "brown",
      }
    ],
    done: true
  },

  {
    mission: 'Select all the things!',
    title: 'The Universal Selector',
    subtitle: 'You can select everything!',
    syntax: '*',
    description: 'You can select all elements with the universal selector!',
    examples: [
      '<stong>p *</stong> selects any element inside all <stong>&lt;p&gt;</stong> elements.',
    ],
    answers: ['#moving wood'],
    level: 10,
    code: [
      {
        tag: "platform",
        id: "brown",
      },
      {
        tag: "wagon",
        id: "brown",
        child: [
          {
            tag: "wood",
            id: "searocks"
          }
        ]
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "searocks"
          }
        ]
      },
      {
        tag: "wagon",
        id: "brown",
        child: [
          {
            tag: "wood",
            id: "searocks"
          }
        ]
      }
    ]
  },
];

module.exports = taskList;
