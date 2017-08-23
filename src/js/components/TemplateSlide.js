import React from "react";

export default class TemplateSlide extends React.Component {

	render() {


			return (
					<div class="slide" data-parallax="scroll" data-bleed="10" data-image-src={this.props.dataImageSrc} data-natural-width={this.props.dataNaturalWidth}
					     data-natural-height={this.props.dataNaturalHeight} data-speed="0.1">
					    <div class="quotes_container">
					        <div>
					            <h2>{this.props.title}</h2>

					  			<h3>{this.props.subtitle}</h3>
					        </div>
					        <div id="formore">
					            <a href={this.props.url}>{this.props.urlText}</a>
					        </div>
					    </div>
					</div>

			);


		
	}
}