import Typewriter from 'typewriter-effect';

const TypeWriterComp = ({text}) => {

    return (
        <Typewriter
        options={{
            strings: text,
            autoStart: true,
            loop: true,
            deleteSpeed: 15,
            deleteAll: true,
        }}
        />
    )
}

export default TypeWriterComp;
