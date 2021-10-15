# TypeScript的编译环境

- 在前面我们提到过，TypeScript最终会被编译成JavaScript来运行，所以我们需要搭建对应的环境：
  - 我们需要在电脑上安装TypeScript，这样就可以通过TypeScript的Compiler将其编译成JavaScript；

![image-20211014155425718](typescript.assets/image-20211014155425718.png)

- 所以，我们需要先可以先进行全局的安装：

>安装命令 npm install typescript -g
>
>查看版本 tsc --version

# TypeScript的运行环境

- 如果我们每次为了查看TypeScript代码的运行效果，都通过经过两个步骤的话就太繁琐了： 
  - 第一步：通过tsc编译TypeScript到JavaScript代码； 
  - 第二步：在浏览器或者Node环境下运行JavaScript代码； 
- 是否可以简化这样的步骤呢？ 
  - 比如编写了TypeScript之后可以直接运行在浏览器上？
  - 比如编写了TypeScript之后，直接通过node的命令来执行？
- 上面我提到的两种方式，可以通过两个解决方案来完成： 
  - 方式一：通过webpack，配置本地的TypeScript编译环境和开启一个本地服务，可以直接运行在浏览器上；
  - 方式二：通过ts-node库，为TypeScript的运行提供执行环境； 
- 方式一：webpack配置 
  - 方式一在之前的TypeScript文章中我已经有写过，如果需要可以自行查看对应的文章；
  -  https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw；

>使用ts-node

- 方式二：安装ts-node

>npm install ts-node -g

- 另外ts-node需要依赖 tslib 和 @types/node 两个包：

>npm install tslib @types/node -g

- 现在，我们可以直接通过 ts-node 来运行TypeScript的代码：

>ts-node math.ts

# 变量的声明

## 声明变量的关键字

- 在TypeScript定义变量（标识符）和ES6之后一致，可以使用var、let、const来定义。

![image-20211014155947637](typescript.assets/image-20211014155947637.png)

- 当然，在tslint中并不推荐使用var来声明变量：
  - 可见，在TypeScript中并不建议再使用var关键字了，主要原因和ES6升级后let和var的区别是一样的，var是没 有块级作用域的，会引起很多的问题，这里不再展开探讨。

![image-20211014160017369](typescript.assets/image-20211014160017369.png)

## 变量的类型推导（推断）

- 在开发中，有时候为了方便起见我们并不会在声明每一个变量时都写上对应的数据类型，我们更希望可以通过TypeScript本身的 特性帮助我们推断出对应的变量类型：

![image-20211014160044813](typescript.assets/image-20211014160044813.png)

- 如果我们给message赋值123：

![image-20211014160059912](typescript.assets/image-20211014160059912.png)

- 这是因为在一个变量第一次赋值时，会根据后面的赋值内容的类型，来推断出变量的类型：
  - 上面的message就是因为后面赋值的是一个string类型，所以message虽然没有明确的说明，但是依然是一个string类型；

![image-20211014160122350](typescript.assets/image-20211014160122350.png)

# 数据类型

## JavaScript类型 – number类型

- 数字类型是我们开发中经常使用的类型，TypeScript和JavaScript一样，不区分整数类型（int）和浮点型 （double），统一为number类型。

![image-20211014160313236](typescript.assets/image-20211014160313236.png)

- 如果你学习过ES6应该知道，ES6新增了二进制和八进制的表示方法，而TypeScript也是支持二进制、八进制、十 六进制的表示：

![image-20211014160329181](typescript.assets/image-20211014160329181.png)

## JavaScript类型 – boolean类型

- boolean类型只有两个取值：true和false，非常简单

![image-20211014160351766](typescript.assets/image-20211014160351766.png)

## JavaScript类型 – string类型

- string类型是字符串类型，可以使用单引号或者双引号表示： 

![image-20211014160614732](typescript.assets/image-20211014160614732.png)

- 同时也支持ES6的模板字符串来拼接变量和字符串：

![image-20211014160621704](typescript.assets/image-20211014160621704.png)

## JavaScript类型 – Array类型

- 数组类型的定义也非常简单，有两种方式： 

![image-20211014160647182](typescript.assets/image-20211014160647182.png)

- 如果添加其他类型到数组中，那么会报错：

![image-20211014160655006](typescript.assets/image-20211014160655006.png)

## JavaScript类型 – Object类型

- object对象类型可以用于描述一个对象： 

![image-20211014160724334](typescript.assets/image-20211014160724334.png)

- 但是从myinfo中我们不能获取数据，也不能设置数据：

![image-20211014160732958](typescript.assets/image-20211014160732958.png)

## JavaScript类型 – Symbol类型

- 在ES5中，如果我们是不可以在对象中添加相同的属性名称的，比如下面的做法： 

![image-20211014164229925](typescript.assets/image-20211014164229925.png)

- 通常我们的做法是定义两个不同的属性名字：比如identity1和identity2。 
- 但是我们也可以通过symbol来定义相同的名称，因为Symbol函数返回的是不同的值：

![image-20211014164237330](typescript.assets/image-20211014164237330.png)

## JavaScript类型 – null和undefined类型

- 在 JavaScript 中，undefined 和 null 是两个基本数据类型。 
- 在TypeScript中，它们各自的类型也是undefined和null，也就意味着它们既是实际的值，也是自己的类型：

![image-20211014164308379](typescript.assets/image-20211014164308379.png)

## TypeScript类型 - any类型

- 在某些情况下，我们确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候我们可以使用any类型（类似 于Dart语言中的dynamic类型）。 
- any类型有点像一种讨巧的TypeScript手段： 
  - 我们可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法； 
  - 我们给一个any类型的变量赋值任何的值，比如数字、字符串的值；

![image-20211014164406283](typescript.assets/image-20211014164406283.png)

- 如果对于某些情况的处理过于繁琐不希望添加规定的类型注解，或者在引入一些第三方库时，缺失了类型注解，这个时候 我们可以使用any：
  - 包括在Vue源码中，也会使用到any来进行某些类型的适配；

## TypeScript类型 - unknown类型

- unknown是TypeScript中比较特殊的一种类型，它用于描述类型不确定的变量。 
- 什么意思呢？我们来看下面的场景：

![image-20211014164451323](typescript.assets/image-20211014164451323.png)

## TypeScript类型 - void类型

- void通常用来指定一个函数是没有返回值的，那么它的返回值就是void类型： 
  - 我们可以将null和undefined赋值给void类型，也就是函数可以返回null或者undefined

![image-20211014164528200](typescript.assets/image-20211014164528200.png)

- 这个函数我们没有写任何类型，那么它默认返回值的类型就是void的，我们也可以显示的来指定返回值是void：

![image-20211014164544530](typescript.assets/image-20211014164544530.png)

## TypeScript类型 - never类型

- never 表示永远不会发生值的类型，比如一个函数： 
  - 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗？ 
  - 不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型；

![image-20211014164618125](typescript.assets/image-20211014164618125.png)

- never有什么样的应用场景呢？这里我们举一个例子，但是它用到了联合类型，后面我们会讲到：

## TypeScript类型 - tuple类型

- tuple是元组类型，很多语言中也有这种数据类型，比如Python、Swift等。

![image-20211014164709412](typescript.assets/image-20211014164709412.png)

- 那么tuple和数组有什么区别呢？ 
  - 首先，数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。（可以放在对象或者元组 中） 
  - 其次，元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型；

![image-20211014164737044](typescript.assets/image-20211014164737044.png)

## Tuples的应用场景

- 那么tuple在什么地方使用的是最多的呢？ 
  - tuple通常可以作为返回的值，在使用的时候会非常的方便；

![image-20211014164846860](typescript.assets/image-20211014164846860.png)

## 函数的参数类型

- 函数是JavaScript非常重要的组成部分，TypeScript允许我们指定函数的参数和返回值的类型。 
- 参数的类型注解 
  - 声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型：

![image-20211015110248525](typescript.assets/image-20211015110248525.png)

## 函数的返回值类型

- 我们也可以添加返回值的类型注解，这个注解出现在函数列表的后面： 

  ![image-20211015110338525](typescript.assets/image-20211015110338525.png)

- 和变量的类型注解一样，我们通常情况下不需要返回类型注解，因为TypeScript会根据 return 返回值推断函数的 返回类型：

  - 某些第三方库处于方便理解，会明确指定返回类型，但是这个看个人喜好；

## 匿名函数的参数

- 匿名函数与函数声明会有一些不同： 
  - 当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时； 
  - 该函数的参数会自动指定类型；

![image-20211015110420509](typescript.assets/image-20211015110420509.png)

- 我们并没有指定item的类型，但是item是一个string类型： 
  - 这是因为TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型； 
  - 这个过程称之为**上下文类型（contextual typing）**，因为函数执行的上下文可以帮助确定参数和返回值的类型；

## 对象类型

- 如果我们希望限定一个函数接受的参数是一个对象，这个时候要如何限定呢？ 
  - 我们可以使用对象类型；

![image-20211015110717658](typescript.assets/image-20211015110717658.png)

- 在这里我们使用了一个对象来作为类型： 
  - 在对象我们可以添加属性，并且告知TypeScript该属性需要是什么类型； 
  - 属性之间可以使用 , 或者 ; 来分割，最后一个分隔符是可选的； 
  - 每个属性的类型部分也是可选的，如果不指定，那么就是any类型；

## 可选类型

- 对象类型也可以指定哪些属性是可选的，可以在属性的后面添加一个?：

![image-20211015111008168](typescript.assets/image-20211015111008168.png)

## 联合类型

- TypeScript的类型系统允许我们使用多种运算符，从现有类型中构建新类型。 
- 我们来使用第一种组合类型的方法：联合类型（Union Type） 
  - 联合类型是由两个或者多个其他类型组成的类型； 
  - 表示可以是这些类型中的任何一个值； 
  - 联合类型中的每一个类型被称之为联合成员（union's members）；

![image-20211015111300124](typescript.assets/image-20211015111300124.png)

## 使用联合类型

- 传入给一个联合类型的值是非常简单的：只要保证是联合类型中的某一个类型的值即可
  - 但是我们拿到这个值之后，我们应该如何使用它呢？因为它可能是任何一种类型。
  - 比如我们拿到的值可能是string或者number，我们就不能对其调用string上的一些方法；
- 那么我们怎么处理这样的问题呢？
  - 我们需要使用缩小（narrow）联合（后续我们还会专门讲解缩小相关的功能）；
  - TypeScript可以根据我们缩小的代码结构，推断出更加具体的类型；

![image-20211015111347636](typescript.assets/image-20211015111347636.png)

## 可选类型补充

- 其实上，可选类型可以看做是 类型 和 undefined 的联合类型：

![image-20211015111416678](typescript.assets/image-20211015111416678.png)

## 类型别名

- 在前面，我们通过在类型注解中编写 对象类型 和 联合类型，但是当我们想要多次在其他地方使用时，就要编写多 次。 
- 比如我们可以给对象类型起一个别名：

![image-20211015111445543](typescript.assets/image-20211015111445543.png)

## 类型断言as

- 有时候TypeScript无法获取具体的类型信息，这个我们需要使用类型断言（Type Assertions）。
  - 比如我们通过 document.getElementById，TypeScript只知道该函数会返回 HTMLElement ，但并不知道它 具体的类型：

![image-20211015111750717](typescript.assets/image-20211015111750717.png)

- TypeScript只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换：

![image-20211015111809286](typescript.assets/image-20211015111809286.png)

## 非空类型断言!

- 当我们编写下面的代码时，在执行ts的编译阶段会报错： 
  - 这是因为传入的message有可能是为undefined的，这个时候是不能执行方法的；

![image-20211015111844476](typescript.assets/image-20211015111844476.png)

- 但是，我们确定传入的参数是有值的，这个时候我们可以使用非空类型断言： 
  - 非空断言使用的是 ! ，表示可以确定某个标识符是有值的，跳过ts在编译阶段对它的检测；

![image-20211015111906811](typescript.assets/image-20211015111906811.png)

## 可选链的使用

- 可选链事实上并不是TypeScript独有的特性，它是ES11（ES2020）中增加的特性： 
  - 可选链使用可选链操作符 ?.； 
  - 它的作用是当对象的属性不存在时，会短路，直接返回undefined，如果存在，那么才会继续执行； 
  - 虽然可选链操作是ECMAScript提出的特性，但是和TypeScript一起使用更版本；

![image-20211015111941839](typescript.assets/image-20211015111941839.png)

## ??和!!的作用

- 有时候我们还会看到 !! 和 ?? 操作符，这些都是做什么的呢？ 
- !!操作符： 
  - 将一个其他类型转换成boolean类型； 
  - 类似于Boolean(变量)的方式； 
- ??操作符： 
  - 它是ES11增加的新特性； 
  - 空值合并操作符（??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数， 否则返回左侧操作数；

![image-20211015112044108](typescript.assets/image-20211015112044108.png)

## 字面量类型

- 除了前面我们所讲过的类型之外，也可以使用字面量类型（literal types）：

![image-20211015112106076](typescript.assets/image-20211015112106076.png)

- 那么这样做有什么意义呢？ 
  - 默认情况下这么做是没有太大的意义的，但是我们可以将多个类型联合在一起；

![image-20211015112128416](typescript.assets/image-20211015112128416.png)

## 字面量推理

- 我们来看下面的代码：

![image-20211015112205772](typescript.assets/image-20211015112205772.png)

- 这是因为我们的对象再进行字面量推理的时候，info其实是一个 {url: string, method: string}，所以我们没办法将 一个 sring 赋值给一个 字面量 类型。

![image-20211015112225212](typescript.assets/image-20211015112225212.png)

## 类型缩小

![image-20211015135707391](typescript.assets/image-20211015135707391.png)

## typeof

![image-20211015135734951](typescript.assets/image-20211015135734951.png)

## 平等缩小

![image-20211015135756448](typescript.assets/image-20211015135756448.png)

## instanceof

- JavaScript 有一个运算符来检查一个值是否是另一个值的“实例”：

![image-20211015135850411](typescript.assets/image-20211015135850411.png)

## in

- Javascript 有一个运算符，用于确定对象是否具有带名称的属性：in运算符
  - 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true；

![image-20211015135922273](typescript.assets/image-20211015135922273.png)

# TypeScript函数类型

- 在JavaScript开发中，函数是重要的组成部分，并且函数可以作为一等公民（可以作为参数，也可以作为返回值进 行传递）。 
- 那么在使用函数的过程中，函数是否也可以有自己的类型呢？
  - 我们可以编写函数类型的表达式（Function Type Expressions），来表示函数类型；

![image-20211015140109924](typescript.assets/image-20211015140109924.png)

## TypeScript函数类型解析

- 在上面的语法中 (num1: number, num2: number) => void，代表的就是一个函数类型： 
  - 接收两个参数的函数：num1和num2，并且都是number类型； 
  - 并且这个函数是没有返回值的，所以是void； 
- 在某些语言中，可能参数名称num1和num2是可以省略，但是TypeScript是不可以的：

## 参数的可选类型

- 我们可以指定某个参数是可选的：

![image-20211015140230147](typescript.assets/image-20211015140230147.png)

![image-20211015140240924](typescript.assets/image-20211015140240924.png)

## 默认参数

- 从ES6开始，JavaScript是支持默认参数的，TypeScript也是支持默认参数的： 

  ![image-20211015140508154](typescript.assets/image-20211015140508154.png)

- 这个时候y的类型其实是 undefined 和 number 类型的联合。

## 剩余参数

- 从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中。

![image-20211015140531295](typescript.assets/image-20211015140531295.png)

## 可推导的this类型

- this是JavaScript中一个比较难以理解和把握的知识点： 
  - 我在公众号也有一篇文章专门讲解this：https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA； 
  - 因为this在不同的情况下会绑定不同的值，所以对于它的类型就更难把握了； 
- 那么，TypeScript是如何处理this呢？我们先来看一个例子：

![image-20211015140606154](typescript.assets/image-20211015140606154.png)

- 上面的代码是可以正常运行的，也就是TypeScript在编译时，认为我们的this是可以正确去使用的：
  - TypeScript认为函数 sayHello 有一个对应的this的外部对象 info，所以在使用时，就会把this当做该对象。

## 不确定的this类型

- 但是对于某些情况来说，我们并不知道this到底是什么？

![image-20211015140712080](typescript.assets/image-20211015140712080.png)

- 这段代码运行会报错的： 
  - 这里我们再次强调一下，TypeScript进行类型检测的目的是让我们的代码更加的安全； 
  - 所以这里对于 sayHello 的调用来说，我们虽然将其放到了info中，通过info去调用，this依然是指向info对象的； 
  - 但是对于TypeScript编译器来说，这个代码是非常不安全的，因为我们也有可能直接调用函数，或者通过别的对象来 调用函数；

## 指定this的类型

- 这个时候，通常TypeScript会要求我们明确的指定this的类型：

![image-20211015140802610](typescript.assets/image-20211015140802610.png)

## 函数的重载

- 在TypeScript中，如果我们编写了一个add函数，希望可以对字符串和数字类型进行相加，应该如何编写呢？
- 我们可能会这样来编写，但是其实是错误的：

![image-20211015140835186](typescript.assets/image-20211015140835186.png)

- 那么这个代码应该如何去编写呢？
  - 在TypeScript中，我们可以去编写不同的重载签名（overload signatures）来表示函数可以以不同的方式进行 调用；
  - 一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现；

## sum函数的重载

- 比如我们对sum函数进行重构： 
- 在我们调用sum的时候，它会根据我们传入的参数类型来决定执行函数体时，到底执行哪一个函数的重载签名；

![image-20211015140939577](typescript.assets/image-20211015140939577.png)

![image-20211015140946770](typescript.assets/image-20211015140946770.png)

## 联合类型和重载

- 我们现在有一个需求：定义一个函数，可以传入字符串或者数组，获取它们的长度。 
- 这里有两种实现方案： 
  - 方案一：使用联合类型来实现；
  - 方案二：实现函数重载来实现；

![image-20211015141028486](typescript.assets/image-20211015141028486.png)

- 在开发中我们选择使用哪一种呢？ 
  - 在可能的情况下，尽量选择使用联合类型来实现；

# 类

## 类的定义

- 我们来定义一个Person类： 
- 使用class关键字来定义一个类； 
- 我们可以声明一些类的属性：在类的内部声明类的属性以及对应的类型 
  - 如果类型没有声明，那么它们默认是any的； 
  - 我们也可以给属性设置初始化值； 
  - 在默认的strictPropertyInitialization模式下面我们的属性是必须初始 化的，如果没有初始化，那么编译时就会报错； 
    - 如果我们在strictPropertyInitialization模式下确实不希望给属性初 始化，可以使用 name!: string语法； 
- 类可以有自己的构造函数constructor，当我们通过new关键字创建一个 实例时，构造函数会被调用； 
  - 构造函数不需要返回任何值，默认返回当前创建出来的实例； 
- 类中可以有自己的函数，定义的函数称之为方法

![image-20211015150642520](typescript.assets/image-20211015150642520.png)

## 类的继承

- 面向对象的其中一大特性就是继承，继承不仅仅可以减少我们的代码量，也是多态的使用前提。 
- 我们使用extends关键字来实现继承，子类中使用super来访问父类。 
- 我们来看一下Student类继承自Person： 
  - Student类可以有自己的属性和方法，并且会继承Person的属性和方法； 
  - 在构造函数中，我们可以通过super来调用父类的构造方法，对父类中的属性进行初始化；

![image-20211015151152016](typescript.assets/image-20211015151152016.png)

## 类的成员修饰符

- 在TypeScript中，类的属性和方法支持三种修饰符： public、private、protected 
  - public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的； 
  - private 修饰的是仅在同一类中可见、私有的属性或方法； 
  - protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法； 
- public是默认的修饰符，也是可以直接访问的，我们这里来演示一下protected和private。

![image-20211015151246477](typescript.assets/image-20211015151246477.png)

## 只读属性readonly

- 如果有一个属性我们不希望外界可以任意的修改，只希望确定值后直接使用，那么可以使用readonly：

![image-20211015151308582](typescript.assets/image-20211015151308582.png)

## getters/setters

- 在前面一些私有属性我们是不能直接访问的，或者某些属性我们想要监听它的获取(getter)和设置(setter)的过程， 这个时候我们可以使用存取器

![image-20211015151339272](typescript.assets/image-20211015151339272.png)

# 接口

## 接口的声明

![image-20211015153944140](typescript.assets/image-20211015153944140.png)

## 可选属性

- 接口中我们也可以定义可选属性：

![image-20211015154040933](typescript.assets/image-20211015154040933.png)

## 只读属性

- 接口中也可以定义只读属性： 
  - 这样就意味着我们再初始化之后，这个值是不可以被修改的；

![image-20211015154111509](typescript.assets/image-20211015154111509.png)

## 索引类型

- 前面我们使用interface来定义对象类型，这个时候其中的属性名、类型、方法都是确定的，但是有时候我们会遇 到类似下面的对象：

![image-20211015154130455](typescript.assets/image-20211015154130455.png)

## 函数类型

- 前面我们都是通过interface来定义对象中普通的属性和方法的，实际上它也可以用来定义函数类型：

![image-20211015154151877](typescript.assets/image-20211015154151877.png)

- 当然，除非特别的情况，还是推荐大家使用类型别名来定义函数：

![image-20211015154204701](typescript.assets/image-20211015154204701.png)

## 接口继承

- 接口和类一样是可以进行继承的，也是使用extends关键字： 
  - 并且我们会发现，接口是支持多继承的（类不支持多继承）

![image-20211015154226039](typescript.assets/image-20211015154226039.png)

## 接口的实现

- 接口定义后，也是可以被类实现的： 
  - 如果被一个类实现，那么在之后需要传入接口的地方，都可以将这个类传入； 
  - 这就是面向接口开发；

![image-20211015154254500](typescript.assets/image-20211015154254500.png)

## 交叉类型

- 前面我们学习了联合类型：

  - 联合类型表示多个类型中一个即可

  ![image-20211015154343442](typescript.assets/image-20211015154343442.png)

- 还有另外一种类型合并，就是交叉类型（Intersection Types）： 
  - 交叉类似表示需要满足多个类型的条件；
  - 交叉类型使用 & 符号； 
- 我们来看下面的交叉类型：
  - 表达的含义是number和string要同时满足；
  - 但是有同时满足是一个number又是一个string的值吗？其实是没有的，所以MyType其实是一个never类型；

![image-20211015154414996](typescript.assets/image-20211015154414996.png)

## 交叉类型的应用

- 所以，在开发中，我们进行交叉时，通常是对对象类型进行交叉的：

![image-20211015154438237](typescript.assets/image-20211015154438237.png)

## interface和type区别

- 我们会发现interface和type都可以用来定义对象类型，那么在开发中定义对象类型时，到底选择哪一个呢？
  - 如果是定义非对象类型，通常推荐使用type，比如Direction、Alignment、一些Function； 
- 如果是定义对象类型，那么他们是有区别的： 
  - interface 可以重复的对某个接口来定义属性和方法； 
  - 而type定义的是别名，别名是不能重复的；

![image-20211015154530286](typescript.assets/image-20211015154530286.png)

## 字面量赋值

![image-20211015154556279](typescript.assets/image-20211015154556279.png)

- 这是因为TypeScript在字面量直接赋值的过程中，为了进行类型推导会进行严格的类型限制。
- 但是之后如果我们是将一个 变量标识符 赋值给其他的变量时，会进行freshness擦除操作。

# TypeScript枚举类型

- 枚举类型是为数不多的TypeScript特性有的特性之一： 
  - 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型；
  - 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型；

![image-20211015160319501](typescript.assets/image-20211015160319501.png)

## 枚举类型的值

- 枚举类型默认是有值的，比如上面的枚举，默认值是这样的： 
- 当然，我们也可以给枚举其他值： 
  - 这个时候会从100进行递增； 
- 我们也可以给他们赋值其他的类型：

![image-20211015160349546](typescript.assets/image-20211015160349546.png)

# 泛型

- 软件工程的主要目的是构建不仅仅明确和一致的API，还要让你的代码具有很强的可重用性： 
  - 比如我们可以通过函数来封装一些API，通过传入不同的函数参数，让函数帮助我们完成不同的操作； 
  - 但是对于参数的类型是否也可以参数化呢？ 
- 什么是类型的参数化？ 
  - 我们来提一个需求：封装一个函数，传入一个参数，并且返回这个参数；
- 如果我们是TypeScript的思维方式，要考虑这个参数和返回值的类型需要一致：

![image-20211015163140642](typescript.assets/image-20211015163140642.png)

- 上面的代码虽然实现了，但是不适用于其他类型，比如string、boolean、Person等类型：

![image-20211015163156209](typescript.assets/image-20211015163156209.png)

## 泛型实现类型参数化

- 虽然any是可以的，但是定义为any的时候，我们其实已经丢失了类型信息： 
  - 比如我们传入的是一个number，那么我们希望返回的可不是any类型，而是number类型； 
  - 所以，我们需要在函数中可以捕获到参数的类型是number，并且同时使用它来作为返回值的类型； 
- 我们需要在这里使用一种特性的变量 - 类型变量（type variable），它作用于类型，而不是值：

![image-20211015163732968](typescript.assets/image-20211015163732968.png)

- 这里我们可以使用两种方式来调用它： 
  - 方式一：通过 <类型> 的方式将类型传递给函数； 
  - 方式二：通过类型推到，自动推到出我们传入变量的类型：
    - 在这里会推导出它们是 字面量类型的，因为字面量类型对于我们的函数也是适用的

![image-20211015163802297](typescript.assets/image-20211015163802297.png)

## 泛型的基本补充

- 当然我们也可以传入多个类型： 

  ![image-20211015163958698](typescript.assets/image-20211015163958698.png)

- 平时在开发中我们可能会看到一些常用的名称： 

  - T：Type的缩写，类型 
  - K、V：key和value的缩写，键值对 
  - E：Element的缩写，元素 
  - O：Object的缩写，对象

## 泛型接口

- 在定义接口的时候我们也可以使用泛型:

![image-20211015170620554](typescript.assets/image-20211015170620554.png)

## 泛型类

- 我们也可以编写一个泛型类：

![image-20211015170643336](typescript.assets/image-20211015170643336.png)

## 泛型约束

- 有时候我们希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中： 
  - 比如string和array都是有length的，或者某些对象也是会有length属性的； 
  - 那么只要是拥有length的属性都可以作为我们的参数类型，那么应该如何操作呢？

![image-20211015170718765](typescript.assets/image-20211015170718765.png)

# 模块化和命名空间

## 模块化开发

- TypeScript支持两种方式来控制我们的作用域： 
  - 模块化：每个文件可以是一个独立的模块，支持ES Module，也支持CommonJS； 
  - 命名空间：通过namespace来声明一个命名空间

![image-20211015170748358](typescript.assets/image-20211015170748358.png)

## 命名空间namespace

- 命名空间在TypeScript早期时，称之为内部模块，主要目的是将一个模块内部再进行作用域的划分，防止一些命名 冲突的问题。

![image-20211015170813185](typescript.assets/image-20211015170813185.png)

# 类型的查找

![image-20211015170845032](typescript.assets/image-20211015170845032.png)

# 内置类型声明

- 内置类型声明是typescript自带的、帮助我们内置了JavaScript运行时的一些标准化API的声明文件；
  - 包括比如Math、Date等内置类型，也包括DOM API，比如Window、Document等； 
- 内置类型声明通常在我们安装typescript的环境中会带有的；
  - https://github.com/microsoft/TypeScript/tree/main/lib

# 外部定义类型声明和自定义声明

- 外部类型声明通常是我们使用一些库（比如第三方库）时，需要的一些类型声明。
- 这些库通常有两种类型声明方式：
- 方式一：在自己库中进行类型声明（编写.d.ts文件），比如axios 
- 方式二：通过社区的一个公有库DefinitelyTyped存放类型声明文件
  - 该库的GitHub地址：https://github.com/DefinitelyTyped/DefinitelyTyped/
  - 该库查找声明安装方式的地址：https://www.typescriptlang.org/dt/search?search=
  - 比如我们安装react的类型声明： npm i @types/react --save-dev 
- 什么情况下需要自己来定义声明文件呢？
  - 情况一：我们使用的第三方库是一个纯的JavaScript库，没有对应的声明文件；比如lodash
  - 情况二：我们给自己的代码中声明一些类型，方便在其他地方直接进行使用；

# 声明变量-函数-类

![image-20211015171055549](typescript.assets/image-20211015171055549.png)

# 声明模块

- 我们也可以声明模块，比如lodash模块默认不能使用的情况，可以自己来声明这个模块：

  ![image-20211015171131717](typescript.assets/image-20211015171131717.png)

- 声明模块的语法: declare module '模块名' {}。

- 在声明模块的内部，我们可以通过 export 导出对应库的类、函数等；

# declare文件

- 在某些情况下，我们也可以声明文件：
  - 比如在开发vue的过程中，默认是不识别我们的.vue文件的，那么我们就需要对其进行文件的声明；
  - 比如在开发中我们使用了 jpg 这类图片文件，默认typescript也是不支持的，也需要对其进行声明；

![image-20211015171200574](typescript.assets/image-20211015171200574.png)

# declare命名空间

- 比如我们在index.html中直接引入了jQuery： 
  - CDN地址： https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js 
- 我们可以进行命名空间的声明：

![image-20211015171244835](typescript.assets/image-20211015171244835.png)

- 在main.ts中就可以使用了：

![image-20211015171259007](typescript.assets/image-20211015171259007.png)

# tsconfig.json文件

- tsconfig.json是用于配置TypeScript编译时的配置选项：
  - https://www.typescriptlang.org/tsconfig 
- 我们这里讲解几个比较常见的：

![image-20211015171445218](typescript.assets/image-20211015171445218.png)

![image-20211015171454402](typescript.assets/image-20211015171454402.png)