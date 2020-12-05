const data = [
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
    hint: false,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "wagon",
      },
      {
        tag: "platform",
      },
      {
        tag: "wagon",
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
    done: true,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "platform",
      },
      {
        tag: "wagon",
      },
      {
        tag: "wagon",
      },
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
    answers: ['#moving', 'wagon#moving'],
    level: 3,
    done: true,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "wagon"
      },
      {
        tag: "wagon",
        id: "moving"
      }
    ]
  },
  {
    mission: 'Select the coal in the wagon',
    title: 'Descendant Selector',
    subtitle: 'Select an element inside another element',
    syntax: 'A B',
    description: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
    examples: [
      '<strong>p  strong</strong> selects all <strong>&lt;strong&gt;</strong> elements that are inside of any <strong>&lt;p&gt;</strong>',
      '<strong>#fancy  span</strong> selects any <strong>&lt;span&gt;</strong> elements that are inside of the element with <strong>id="fancy"</strong>'],
    answers: ['wagon coal'],
    level: 4,
    done: true,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "wagon",
        child: [
          {
            tag: 'coal'
          }
        ]
      },
      {
        tag: "platform",
        child: [
          {
            tag: "coal"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select rocks on the moving platform',
    title: 'Combine the Descendant & ID Selectors',
    subtitle: 'Select an element inside another element',
    syntax: '#id  A',
    description: 'You can combine any selector with the descendent selector.',
    examples: [
      '<stong>#cool span</stong> selects all <stong>&lt;span&gt;</stong> elements that are inside of elements with <stong>id="cool"</stong>'],
    answers: ['#moving rocks', 'platform#moving rocks'],
    level: 5,
    done: true,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "platform",
        child: [
          {
            tag: "rocks",
          },
        ]
      },
      {
        tag: "platform",
        id: "moving",
        child: [
          {
            tag: "rocks",
          }
        ]
      },
      {
        tag: 'platform',
        child: [
          {
            tag: "wood",
          }
        ]
      }
    ]
  },
  {
    mission: 'Select the small goods',
    title: 'Class Selector',
    subtitle: 'Select elements by their class',
    syntax: '.classname',
    description: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples: [
      '<stong>.neato</stong> selects all elements with <stong>class="neato"</stong>'],
    answers: ['.small'],
    level: 6,
    done: true,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "wagon",
        child: [
          {
            tag: "coal",
            classes: ["small"]
          },
          {
            tag: "coal",
            classes: ["small"]
          },
        ]
      },
      {
        tag: "wagon",
        id: "moving",
        child: [
          {
            tag: "wood",
            classes: ["small"]
          },
          {
            tag: "rocks",
            classes: ["small"]
          }
        ]
      },
      {
        tag: "wagon",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "gravel"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select small tanks',
    title: '',
    subtitle: 'Combine the Class Selector',
    syntax: 'A.className',
    description: 'You can combine the class selector with other selectors, like the type selector.',
    examples: [
      '<stong>ul.important</stong> selects all <stong>&lt;ul&gt;</stong> elements that have <stong>class="important"</stong>',
      '<stong>#big.wide<stong> selects all elements with <stong>id="big"<stong> that also have <stong>class="wide"<stong>'
    ],
    answers: ['tank.small'],
    level: 7,
    done: true,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "platform",

        child: [
          {
            tag: "tank",
          }
        ]
      },
      {
        tag: "platform",
        child: [
          {
            tag: "tank",
            classes: ["small"]
          },
          {
            tag: "tank",
            classes: ["small"]
          }
        ]
      },
      {
        tag: "platform",
        child: [
          {
            tag: "wood"
          }
        ]
      }
    ]
  },
  {
    mission: 'Select small oranges tanks on in the platform',
    title: '',
    subtitle: 'You can do it...',
    syntax: 'Put your back into it!',
    description: 'Combine what you learned in the last few levels to solve this one!',
    examples: [],
    answers: ['platform#light.blue tank.small'],
    level: 8,
    done: true,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "platform",
        classes: ["blue"],
        child: [
          {
            tag: "tank",
            classes: ["small"]
          },
          {
            tag: "rocks",
            classes: ["small"]
          }
        ]
      },
      {
        tag: "platform",
        classes: ["green"],
        id: "light",
        child: [
          {
            tag: "tank",
            classes: ["small"]
          },
          {
            tag: "tank",
            classes: ["small"]
          }
        ]
      },
      {
        tag: "platform",
        classes: ['blue'],
        id: "light",
        child: [
          {
            tag: "tank",
            classes: ["small"]
          },
          {
            tag: "tank",
            classes: ["small"]
          }
        ]
      },
      {
        tag: "platform",
        classes: ["blue"],
        child: [
          {
            tag: "tank"
          }
        ]
      },
    ]
  },
  {
    mission: 'Select all the tanks and woods',
    title: 'Comma Combinator',
    subtitle: 'Combine, selectors, with... commas!',
    syntax: 'A, B',
    description: 'Thanks to Shatner technology, this selects all <stong>A</stong> and <stong>B</stong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
      '<stong>p, .fun</stong> selects all <stong>&lt;p&gt;</stong> elements as well as all elements with <stong>class="fun"</stong>',
      '<stong>a, p, div</stong> selects all <stong>&lt;a&gt;</stong>, <stong>&lt;p&gt;</stong> and <stong>&lt;div&gt;</stong> elements'
    ],
    answers: ['wood, tank', 'tank, wood'],
    level: 9,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "platform",
        child: [
          {
            tag: 'wood',
            classes: ['small']
          },
          {
            tag: 'tank',
            classes: ['small']
          }
        ]
      },
      {
        tag: "wagon",
        classes: ['green'],
        child: [
          {
            tag: 'wood',
          }
        ]
      },
      {
        tag: "platform",
        classes: ['yellow'],
        child: [
          {
            tag: 'tank',
          }
        ]
      }
    ],
    done: true
  },
  {
    mission: 'Select all train!',
    title: 'The Universal Selector',
    subtitle: 'You can select everything!',
    syntax: '*',
    description: 'You can select all elements with the universal selector!',
    examples: [
      '<stong>p *</stong> selects any element inside all <stong>&lt;p&gt;</stong> elements.',
    ],
    answers: ['*'],
    level: 10,
    done: true,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "wood",
            id: "pine"
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
  {
    mission: 'Select everything on platforms',
    title: 'Combine the Universal Selector',
    subtitle: '',
    syntax: 'A *',
    description: 'This selects all elements inside of <strong>A</strong>',
    examples: [
      '<stong>p *</stong> selects any element inside all <stong>&lt;p&gt;</stong> elements.',
    ],
    answers: ['platform *'],
    level: 11,
    code: [
      {
        tag: "locomotive",
      },
      {
        tag: "platform",
        id: "brown",
        child: [
          {
            tag: "rocks",
            id: "volcanо"
          }
        ]
      },
      {
        tag: "wagon",
        child: [
          {
            tag: "coal",
          }
        ]
      },
      {
        tag: "platform",
        id: "light",
        classes: ['green'],
        child: [
          {
            tag: "wood",
            id: "oak"
          }
        ]
      }
    ]
  },
];

module.exports = data;
