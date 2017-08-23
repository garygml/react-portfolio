import React from "react";
import TemplateSlide from "./TemplateSlide";

export default class Home extends React.Component {

	render() {

		if (this.props.lang === "EN")
		{
			return (
				<div>
					<div id="div-home" class="slide1" data-parallax="scroll" data-bleed="10" data-image-src="./assets/img/slide1.jpg" data-natural-width="734"
					     data-natural-height="444" data-speed="0.1">
					    <div id="page-heading" class="content_centered">
					        <h1 lang="en" >Hello, my name is <b>Mingliang Ge</b>.</h1>
					    </div>
					    <div class="desktop_note">
					        <h3>... btw that was me skydiving. :P</h3>
					    </div>
					</div>

					<div class="slide2">
					    <div class="content">
					        <div><h2>Engineering is awesome.</h2></div>
					    </div>
					    <div class="quotes_container">
					        <div>
					        	<img src="./assets/img/avatar.jpeg" width="339" height="508" alt="Avatar" /> 
					        </div>
					        <p>I graduated from The Ohio State University with a degree in Electrical and Computer
					            Engineering, focusing on digital systems and communication. In my college studies, I completed several
					            essential programming courses, including Java, C, etc.. In addition, I was acquainted with computer
					            architectures, microcontrollers, semiconductors, etc., which builds my fundamental electrical engineering
					            practice. </p>

					        <p>During free time I love to learn new computer or programming skills. I am most comfortable with Java and
					            C++, and I am willing to learn new programming languages. In addition, I like web designing and I was
					            teaching myself how to use the HTML and CSS when I was free. I set the website up during my leisure time,
					            using a
					            little bit of CSS, jQuery, PHP, and connect the form to MySQL database.  I am learning Angular CLI recently and I
					            am trying to rewrite the website with Angular. </p>

					        <p>Now I am working as a developer and most of my client projects use Spring MVC framework, Hibernate (JPA) with
					            various relational databases. For the past years I have worked on many exciting
					            projects, most of which are web applications. I think the most exciting part of my job is to learn new
					            frameworks and coding skills while delivering quality codes/products to customers. </p>

					        <p>I like challenges, and I love engineering. I'd love to hear from you and hopefully we can work on some nice
					            projects. </p>

					    </div>
					</div>


					<TemplateSlide 
					dataImageSrc="./assets/img/slide12.jpg" 
					dataNaturalWidth="655" 
					dataNaturalHeight="436" 
					title="I fell in love with coding" 
					subtitle="I started off with electrical engineering in college that deals with 0s and 1s in microcontrollers, but I start to lean towards computer engineering and coding because I love to deal with code logics. " 
					url="#div-projects" 
					urlText="CLICK HERE TO CHECK OUT WHAT I'VE BEEN DOING"
					/>

					<TemplateSlide 
					dataImageSrc="./assets/img/slide8.jpg" 
					dataNaturalWidth="918" 
					dataNaturalHeight="473" 
					title="My Current Status: Currently I am working as a contractor and I am in a middle of a client project. I will update this message once I am available again. " 
					subtitle="" 
					url="" 
					urlText=""
					/>

				</div>

			);

		}

		else {

			return (
				<div>
					
					<div id="div-home" class="slide1" data-parallax="scroll" data-bleed="10" data-image-src="./assets/img/slide1.jpg" data-natural-width="734"
					     data-natural-height="444" data-speed="0.1">
					    <div id="page-heading" class="content_centered">
					        <h1 lang="zh_CN" >你好, 我的名字是 <b>葛明亮</b>。</h1>
					    </div>
					    <div class="desktop_note">
					        <h3>……那个，顺便说一下，这张照片是我在跳伞。 :P</h3>
					    </div>
					</div>

					<div class="slide2">
					    <div class="content">
					        <div><h2>学工程最棒了。</h2></div>
					    </div>
					    <div class="quotes_container">
					        <div>
					        	<img src="./assets/img/avatar.jpeg" width="339" height="508" alt="Avatar" /> 
					        </div>

					        <p>我毕业于俄亥俄州立大学电子工程与计算机系，专攻电子系统和通讯。在我的大学生涯里，我完成了许多编程课程，
					            比如Java，C语言等等。同时，我也熟知了许多硬件工程的知识，比如计算机架构，微处理器，半导体，等等。
					            </p>

					        <p>在业余时间里我喜欢自学新的电脑技能并且练习编程，我对于Java最熟悉，C++其次，我也乐意学习其他新的编程语言。
					          我喜欢写网页代码，通过看别的网页的源代码我自学了HTML和CSS。 我用了一些平常空闲的时间写了这个网站。这个网站用了一些
					          HTML，CSS和jQuery，然后留言板用的是PHP和MySQL数据库。我最近在自学Angular CLI，我在想也许我可以用Angular重写这个网站。</p>

					 		<p>我现在是一名网页开发者，我的项目一般是用Spring MVC，Hibernate／JPA配合各种数据库。我已经完成了一些非常有意思的WebApp。
					        我觉得我的工作非常有趣，因为我可以一直学习新的框架，新的语言或者设计模式。我觉得用户使用这些WebApp让我非常满足。 </p>


					        <p>我喜欢挑战，我喜欢学工程，我爱我的工作。我希望有机会和你合作，完成这些有趣的项目。</p>
					    </div>
					</div>

					<div class="slide" data-parallax="scroll" data-bleed="10" data-image-src="./assets/img/slide12.jpg" data-natural-width="655"
					     data-natural-height="436" data-speed="0.1">
					    <div class="quotes_container">
					        <div>
					            <h2>我爱上了码代码。 </h2>

					  			<h3>我一开始是学电子工程，偏向硬件方向，所以以前学的是微控制器里的逻辑0和1，但我自己都没想到自己最后是靠向了计算机工程和码代码，因为我突然爱上了代码里的逻辑。</h3>
					        </div>
					        <div id="formore">
					            <a href="#div-projects">点此看看我完成了哪些事情</a>
					        </div>
					        


					    </div>

					</div>



					<div class="slide" data-parallax="scroll" data-bleed="10" data-image-src="./assets/img/slide8.jpg" data-natural-width="918"
					     data-natural-height="473" data-speed="0.1">
					    <div class="quotes_container">

					        <div>

					            <h2>我现在的状态：我现在正在一个项目当中。当我完成的时候我会更新这条信息。</h2>

					        </div>
					    </div>
					</div>

				</div>

			);
		}

		
	}
}