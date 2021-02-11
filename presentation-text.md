# Angular presentation
### Alexander Pisarik

Hello. My name is Alexander, I am a student at RS-School. I would like to make a short presentation about Angular framework.

## Some basic Angular approaches
 
Angular is a JavaScript framework that helps to develop applications for various platforms: web, desktop and mobile.

### Component approach

Angular has a component-based interface structure. And if you look at any application or website, you can see that it is created out of some block-components: header, footer, sidebar, articles, widgets. 
HTML, CSS and JS (TypeScript) files responsible for this specific fragment of the page are stored connected to each other inside such block-components.
This approach gives an opportunity to re-use components anywhere within the application. The main two things that are very important for the component is the template - the HTML layout that is responsible for displaying data and, in fact, the data itself that is displayed on the page.
At the same time, Angular establishes a two-way connection between visual display and data, and if the data changes as a result of code execution, then their visual display on the page will automatically change. And if the user changes data within the page, for example, enters information in the “input” field, these changes will affect the data responsible for this piece of code. And the developer does not need to organize this exchange, Angular does it by itself.
In general, component approach allows(элAуз) to have weak connections between components. That is, each component does not affect the other ones: it can be duplicated, or deleted. This will not affect the operation of the rest of the application. In addition, every component works separately from all the other ones.
This approach helps to develop applications of any complexity, by simply using necessary components in this or that particular part of the program.

### MVC

Angular supports the module - view - controller concept. With that in mind, normal html is used to display data (View). It can be supplemented with one’s own tags using Angular.
This separation makes development easier without mixing parts that have different functionality. At the same time, it helps to maintain the structural order of the project by isolating the necessary entities inside the component.

### TypeScript
Angular has been completely was created in TypeScript. And development inside the framework is also carried out in this language. This does not only help to avoid many errors at the compilation stage, but also gives an opportunity to use the most progressive features of the JavaScript language. At the same time, using TS helps to create a well-documented code, which also affects the subsequent ease of its maintenance.

### Routing
Angular gives an opportunity to enable client routing over server routing. A usual website needs to send request to a server in order to display new data on the page, the server will generate and render a new HTML page, which the browser will redraw on the screen. In the case of Angular, transformations take place on the client side. The framework receives just the data from the server (if necessary) and without reloading the page will change the DOM itself.

### Testing
Also, this component approach helps unit testing allowing to test each component in isolation from the rest. Also, Angular provides testing environment. When one uses Angular for development it encourages the developer to test each component before releasing it.

### CLI
Angular has a very convenient console client. It does not only help one to quickly deploy the basic application template, but also helps to add new component parts of the project easily, maintaining the same principle of building the architecture. This console client also generates tests for them.

### Dependency Injection
Angular allows developers to customize dependencies between different modules in a flexible manner, which gives an opportunity to create different configurations. This includes the testing stage, when one can specify the necessary dependencies on other modules for organizing tests.

## Getting into Angular
Angular is a fully-featured framework   that includes tools for solving almost any task related to application development. But because of this, it takes more time for beginners to understand how Angular works, what functionality it offers and how to use it, how to make a better application architecture and write a beautiful code.
In the process of mastering the framework, the logics behind it becomes more and more clear.
This makes Angular well suited for working on large applications and in large teams. One can be sure that all the code will comply with the strict code – guides. And when inviting a new developer to the project it won’t take much time to bring him or her up to date and make them familiar with the project. The project itself will tell everything about its rules and functioning.

That’s why such companies as Nike, Google, Forbes, HBO, Sony and many others choose Angular.

Thanks for listening.


