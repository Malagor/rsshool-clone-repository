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
    done: false,
    hint: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'wagon',
      },
      {
        tag: 'platform',
      },
      {
        tag: 'wagon',
      },
    ],
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
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
      },
      {
        tag: 'wagon',
      },
      {
        tag: 'wagon',
      },
    ],
  },
  {
    mission: 'Select the moving wagon',
    title: 'ID Selector',
    subtitle: 'Select elements with an ID',
    syntax: '#id',
    description: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples: [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects <strong>&lt;ul id="long"&gt;</strong>'],
    answers: ['#moving', 'wagon#moving'],
    level: 3,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'wagon',
      },
      {
        tag: 'wagon',
        id: 'moving',
      },
    ],
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
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'wagon',
        child: [
          {
            tag: 'coal',
          },
        ],
      },
      {
        tag: 'platform',
        child: [
          {
            tag: 'coal',
          },
        ],
      },
    ],
  },
  {
    mission: 'Select rocks on the moving platform',
    title: 'Combine the Descendant & ID Selectors',
    subtitle: 'Select an element inside another element',
    syntax: '#id  A',
    description: 'You can combine any selector with the descendent selector.',
    examples: [
      '<strong>#cool span</strong> selects all <strong>&lt;span&gt;</strong> elements that are inside of elements with <strong>id="cool"</strong>'],
    answers: ['#moving rocks', 'platform#moving rocks'],
    level: 5,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        child: [
          {
            tag: 'rocks',
          },
        ],
      },
      {
        tag: 'platform',
        id: 'moving',
        child: [
          {
            tag: 'rocks',
          },
        ],
      },
      {
        tag: 'platform',
        child: [
          {
            tag: 'wood',
          },
        ],
      },
    ],
  },
  {
    mission: 'Select all small goods',
    title: 'Class Selector',
    subtitle: 'Select elements by their class',
    syntax: '.classname',
    description: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples: [
      '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],
    answers: ['.small'],
    level: 6,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'wagon',
        child: [
          {
            tag: 'coal',
            classes: ['small'],
          },
          {
            tag: 'coal',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'wagon',
        id: 'moving',
        child: [
          {
            tag: 'wood',
            classes: ['small'],
          },
          {
            tag: 'rocks',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'wagon',
        id: 'brown',
        child: [
          {
            tag: 'rocks',
            id: 'gravel',
          },
        ],
      },
    ],
  },
  {
    mission: 'Select small tanks',
    title: '',
    subtitle: 'Combine the Class Selector',
    syntax: 'A.className',
    description: 'You can combine the class selector with other selectors, like the type selector.',
    examples: [
      '<strong>ul.important</strong> selects all <strong>&lt;ul&gt;</strong> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>',
    ],
    answers: ['tank.small'],
    level: 7,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',

        child: [
          {
            tag: 'tank',
          },
        ],
      },
      {
        tag: 'platform',
        child: [
          {
            tag: 'tank',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'platform',
        child: [
          {
            tag: 'wood',
            classes: ['small'],
          },
          {
            tag: 'rocks',
            classes: ['small'],
          },
        ],
      },
    ],
  },
  {
    mission: 'Select small tanks on in the platform',
    title: '',
    subtitle: 'You can do it...',
    syntax: 'Put your back into it!',
    description: 'Combine what you learned in the last few levels to solve this one!',
    examples: [],
    answers: ['platform#light.blue tank.small'],
    level: 8,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        classes: ['blue'],
        child: [
          {
            tag: 'tank',
            classes: ['small'],
          },
          {
            tag: 'rocks',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['green'],
        id: 'light',
        child: [
          {
            tag: 'tank',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['blue'],
        id: 'light',
        child: [
          {
            tag: 'tank',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['blue'],
        child: [
          {
            tag: 'tank',
          },
        ],
      },
    ],
  },
  {
    mission: 'Select all the tanks and woods',
    title: 'Comma Combinator',
    subtitle: 'Combine, selectors, with... commas!',
    syntax: 'A, B',
    description: 'Thanks to Shatner technology, this selects all <stong>A</stong> and <stong>B</stong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
      '<strong>p, .fun</strong> selects all <strong>&lt;p&gt;</strong> elements as well as all elements with <strong>class="fun"</strong>',
      '<strong>a, p, div</strong> selects all <strong>&lt;a&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;div&gt;</strong> elements',
    ],
    answers: ['wood, tank', 'tank, wood'],
    level: 9,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        child: [
          {
            tag: 'wood',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'wagon',
        classes: ['green'],
        child: [
          {
            tag: 'wood',
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['yellow'],
        child: [
          {
            tag: 'tank',
          },
        ],
      },
    ],
  },
  {
    mission: 'Select all train!',
    title: 'The Universal Selector',
    subtitle: 'You can select everything!',
    syntax: '*',
    description: 'You can select all elements with the universal selector!',
    examples: [
      '<strong>p *</strong> selects any element inside all <strong>&lt;p&gt;</strong> elements.',
    ],
    answers: ['*'],
    level: 10,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        id: 'brown',
        child: [
          {
            tag: 'wood',
            id: 'pine',
          },
        ],
      },
      {
        tag: 'wagon',
        id: 'brown',
        child: [
          {
            tag: 'wood',
            id: 'searocks',
          },
        ],
      },
      {
        tag: 'platform',
        id: 'brown',
        child: [
          {
            tag: 'rocks',
            id: 'searocks',
          },
        ],
      },
      {
        tag: 'wagon',
        id: 'brown',
        child: [
          {
            tag: 'wood',
            id: 'searocks',
          },
        ],
      },
    ],
  },

  {
    mission: 'Select everything on platforms',
    title: 'Combine the Universal Selector',
    subtitle: '',
    syntax: 'A *',
    description: 'This selects all elements inside of <strong>A</strong>',
    examples: [
      '<strong>div *</strong> selects any element inside all <strong>&lt;div&gt;</strong> elements.',
    ],
    answers: ['platform *'],
    level: 11,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        id: 'brown',
        child: [
          {
            tag: 'rocks',
            id: 'volcanо',
          },
        ],
      },
      {
        tag: 'wagon',
        child: [
          {
            tag: 'coal',
          },
        ],
      },
      {
        tag: 'platform',
        id: 'light',
        classes: ['green'],
        child: [
          {
            tag: 'wood',
            id: 'oak',
          },
        ],
      },
    ],
  },
  {
    mission: 'Select every tank that\'s next to the coal',
    title: 'Adjacent Sibling Selector',
    subtitle: 'Select an element that directly follows another element',
    syntax: 'A + B',
    description: 'This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. In the HTML markup for this level, elements that have the same indentation are siblings.',
    examples: [
      '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <strong>&lt;p&gt;</strong>',
      '<strong>div + a</strong> selects every <strong>&lg;a&gt;</strong> element that directly follows a <strong>&lt;div&gt;</strong>',
    ],
    answers: ['coal + tank'],
    level: 12,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        classes: ['red'],
        child: [
          {
            tag: 'wood',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['blue'],
        child: [
          {
            tag: 'coal',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },

      {
        tag: 'platform',
        classes: ['green'],
        child: [
          {
            tag: 'rocks',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },
    ],
  },
  {
    mission: 'Select the woods beside the rocks',
    title: 'General Sibling Selector',
    subtitle: 'Select elements that follows another element',
    syntax: 'A ~ B',
    description: 'You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.',
    examples: [
      '<strong>div ~ p</strong> selects all <strong>&lt;p&gt;</strong> that follow a <strong>&lt;div&gt;</strong>',
      '<strong>.light ~ span</strong> selects all <strong>&lt;span&gt;</strong> that follow a element with<strong>class="light"</strong>',
    ],
    answers: ['rocks ~ wood'],
    level: 13,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        id: 'brown',
        child: [
          {
            tag: 'rocks',
            classes: ['extra-small'],
          },
          {
            tag: 'wood',
            classes: ['extra-small'],
          }, {
            tag: 'wood',
            classes: ['extra-small'],
          },

        ],
      },
      {
        tag: 'wagon',
        child: [
          {
            tag: 'rocks',
          },
        ],
      },
      {
        tag: 'platform',
        id: 'light',
        classes: ['green'],
        child: [
          {
            tag: 'wood',
            id: 'oak',
          },
        ],
      },
    ],
  },
  {
    mission: 'Select the coal poured directly on the platform',
    title: 'Child Selector',
    subtitle: 'Select direct children of an element',
    syntax: 'A > B',
    description: 'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element.\n' +
      '<br>' +
      'Elements that are nested deeper than that are called descendant elements.',
    examples: [
      '<strong>div *</strong> selects any element inside all <strong>&lt;div&gt;</strong> elements.',
    ],
    answers: ['platform > coal'],
    level: 14,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        classes: ['blue'],
        child: [
          {
            tag: 'wood',
            child: [
              {
                tag: 'coal',
                classes: ['small'],
              },
              {
                tag: 'coal',
                classes: ['small'],
              },
            ],
          },
        ],
      },
      {
        tag: 'platform',
        id: 'light',
        classes: ['yellow'],
        child: [
          {
            tag: 'coal',
          },
        ],
      },
      {
        tag: 'coal',
      },
    ],
  },
  {
    mission: 'Select the first goods on platforms',
    title: 'First Child Pseudo-selector',
    subtitle: 'Select a first child element inside of another element',
    syntax: ':first-child',
    description: 'You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.',
    examples: [
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <strong>&lt;p&gt;</strong> elements.',
      '<strong>div p:first-child</strong> selects all first child <strong>&lt;p&gt;</strong> elements that are in a <strong>&lt;div&gt;</strong>.',
    ],
    answers: ['platform :first-child'],
    level: 15,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        classes: ['red'],
        child: [
          {
            tag: 'rocks',
            classes: ['extra-small'],
          },
          {
            tag: 'rocks',
            classes: ['extra-small'],
          },
          {
            tag: 'rocks',
            classes: ['extra-small'],
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['blue'],
        child: [
          {
            tag: 'tank',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['green'],
        child: [
          {
            tag: 'wood',
            classes: ['small'],
          },
          {
            tag: 'wood',
            classes: ['small'],
          },
        ],
      },
    ],
  },
  {
    mission: 'Select the tanks and the coal on the green platform and wagon',
    title: 'Only Child Pseudo-selector',
    subtitle: 'Select an element that are the only one element inside of another one.',
    syntax: ':only-child',
    description: 'You can select any element that is the only element inside of another one.',
    examples: [
      '<strong>span:only-child</strong> selects the <strong>&lt;span&gt;</strong> elements that are the only child of some other element.',
      '<strong>ul li:only-child</strong> selects the only <strong>&lt;li&gt;</strong> element that are in a <strong>&lt;ul&gt;</strong>.',
    ],
    answers: ['.green tank:only-child, .green coal:only-child', '.green coal:only-child, .green tank:only-child'],
    level: 16,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        classes: ['green'],
        child: [
          {
            tag: 'rocks',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['green'],
        child: [
          {
            tag: 'tank',
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['green'],
        child: [
          {
            tag: 'coal',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'wagon',
        classes: ['green'],
        child: [
          {
            tag: 'coal',
          },
        ],
      },
    ],
  },
  {
    mission: 'Select the last tank and coal no the platform',
    title: 'Last Child Pseudo-selector',
    subtitle: 'Select the last element inside of another element',
    syntax: ':last-child',
    description: 'You can use this selector to select an element that is the last child element inside of another element.\n' +
      '<br>' +
      'Pro Tip → In cases where there is only one element, that element counts as the first-child, only-child and last-child!',
    examples: [
      '<strong>:last-child</strong> selects all last child elements.',
      '<strong>p:last-child</strong> selects all last child <strong>&lt;p&gt;</strong> elements.',
      '<strong>div p:last-child</strong> selects all last child <strong>&lt;p&gt;</strong> elements that are in a <strong>&lt;div&gt;</strong>.',
    ],
    answers: ['tank:last-child, coal:last-child', 'coal:last-child, tank:last-child'],
    level: 17,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        classes: ['red'],
        child: [
          {
            tag: 'rocks',
            classes: ['small'],
          },
          {
            tag: 'tank',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['blue'],
        child: [
          {
            tag: 'tank',
            classes: ['small'],
          },

          {
            tag: 'rocks',
            classes: ['small'],
          },
        ],
      },
      {
        tag: 'platform',
        classes: ['green'],
        child: [
          {
            tag: 'coal',
            classes: ['small'],
          },
          {
            tag: 'coal',
            classes: ['small'],
          },
        ],
      },
    ],
  },
  {
    mission: 'Select the 2rd wood',
    title: 'Nth Child Pseudo-selector',
    subtitle: 'Select an element by its order in another element',
    syntax: ':nth-child(A)',
    description: 'Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.',
    examples: [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>&lt;p&gt;</strong> in every <strong>&lt;div&gt;</strong>',
    ],
    answers: ['wood:nth-child(2)'],
    level: 18,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        child: [
          {
            tag: 'wood',
            classes: ['extra-small'],
          },
          {
            tag: 'wood',
            classes: ['extra-small'],
          },
          {
            tag: 'wood',
            classes: ['extra-small'],
          },
        ],
      },
    ],
  },
  {
    mission: 'Select the 1st rocks',
    title: 'Nth Last Child Selector',
    subtitle: 'Select an element by its order in another element, counting from the back',
    syntax: ':nth-last-child(A)',
    description: 'Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!',
    examples: [
      '<strong>:nth-last-child(2)</strong> selects all second-to-last child elements.',
    ],
    answers: ['rocks:nth-last-child(3)'],
    level: 19,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        classes: ['red'],
        child: [
          {
            tag: 'rocks',
            classes: ['extra-small'],
          },
          {
            tag: 'rocks',
            classes: ['extra-small'],
          },
          {
            tag: 'rocks',
            classes: ['extra-small'],
          },
        ],
      },
    ],
  },
  {
    mission: 'Select first wood',
    title: 'First of Type Selector',
    subtitle: 'Select the first element of a specific type',
    syntax: ':first-of-type',
    description: 'Selects the first element of that type within another element.',
    examples: [
      '<strong>span:first-of-type</strong> selects the first span in any element.'
    ],
    answers: ['wood:first-of-type'],
    level: 20,
    done: false,
    code: [
      {
        tag: 'locomotive',
      },
      {
        tag: 'platform',
        classes: ['red'],
        child: [
          {
            tag: 'rocks',
            classes: ['extra-small'],
          },
          {
            tag: 'wood',
            classes: ['extra-small'],
          },
          {
            tag: 'wood',
            classes: ['extra-small'],
          },
        ],
      }
    ],
  },
];

module.exports = data;
