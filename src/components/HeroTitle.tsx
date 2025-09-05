import TextType from './TextType';

interface HeroTitleProps {
	text: string | string[];
	textColors?: string[];
}

const HeroTitle = ({ text, textColors = ['#ffffff'] }: HeroTitleProps) => (
	<TextType
		text={text}
		textColors={textColors}
		as="h1"
		className="text-5xl md:text-7xl font-oswald font-normal leading-tight mb-8"
		typingSpeed={35}
		initialDelay={100}
		pauseDuration={2000}
		loop={false}
	/>
);

export default HeroTitle;
