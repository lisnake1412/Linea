import styles from './BubbleImage.module.scss';
import { useEffect, useState } from 'react';

const BUBBLES_DATAs = [
    {
        url: '//images.ctfassets.net/64upluvbiuck/6psO8pRPwpAazCe6siewMN/7c27bfb550adbab367064ba1dad77735/floating-logo-1.png?fm=webp&w=256&q=80',
        left:80,
        bottom:90,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/4WnBKKclrQhXFcpCzbiRA0/9bf75f2a0ddb6646fed623656bb5fe0a/floating-logo-2.png?fm=webp&w=256&q=80',
        left:20,
        bottom:80,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/qwXBlBarj2IZpJ1Numwuw/0bf74e2890c7979c58b50cf30bae2dc4/floating-logo-4.png?fm=webp&w=256&q=80',
        left:63,
        bottom:68,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/6wQEibi2PY6fY5zVtLYWIo/269e89b63e95ca57e66e1956c81a66e5/floating-logo-5.png?fm=webp&w=256&q=80',
        left:37,
        bottom:55,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/4xGdR3903La6cAorC3xy2R/730f99527c31359d49b68ff0d1287058/floating-logo-6.png?fm=webp&w=256&q=80',
        left:82,
        bottom:53,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/5W6MroTXvJJ5LWdFc7TRHW/73c770bbe74f9827a4494bb8b2458b21/floating-logo-7.png?fm=webp&w=256&q=80',
        left:10,
        bottom:48,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/JJGXciPInGZ2ZDVZtWdUm/80f700a0a84acca88cb70322af5bae93/floating-logo-8.png?fm=webp&w=256&q=80',
        left:65,
        bottom:34,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/5HxeTburn9mZnG2oVEqiuq/86585276c09843205ba91eb513906239/floating-logo-9.png?fm=webp&w=256&q=80',
        left:40,
        bottom:28,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/2O37dhC5djzgT01yG4PJ7n/16a8db5a96f0e4801536982ea3f881c2/floating-logo-10.png?fm=webp&w=256&q=80',
        left:18,
        bottom:18,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/6L5y2nNzpAW2UfVTs1wour/71a8738c752e39afe077a35bf5b31030/floating-logo-11.png?fm=webp&w=256&q=80',
        left:84,
        bottom:16,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/5sEEPmeDAwgpP7LDqE9REy/5807d25168a0a1dec39209bea74d1852/compound.png?fm=webp&w=256&q=80',
        left:2,
        bottom:0,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/6Q0h45ZXKg6wDFCapI70F6/3cb07d5b1d857061efb768fa34a38a9b/floating-logo-12.png?fm=webp&w=256&q=80',
        left:62,
        bottom:8,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/52shG7y32wkOygLp4W5RJp/34e5a085b85cd36273be0210ab76458c/floating-logo-13.png?fm=webp&w=256&q=80',
        left:30,
        bottom:3,
    },
    {
        url: '//images.ctfassets.net/64upluvbiuck/2lHZt30vIRxjav5TerK58q/fa32f7f17aa570c6f2a38a5f3155b0de/cataclysm.png?fm=webp&w=256&q=80',
        left:52,
        bottom:85,
    },
];

const FPS = 120; //frame per second - more fps more smooth
const time_duration = 15; //time during one animation

function Bubble({ left, url, bottom }) {
    return <img className={styles['bubble']} src={url} alt={left} style={{ left, bottom}} />;
}

function BubbleImages() {
    const [timeFrame, setTimeFrame] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimeFrame((prev) => (prev + 50)%15000);
        }, (1000/FPS)); //fps
    }, [timeFrame]);

    useEffect(() => {
        BUBBLES_DATAs.forEach( (data, index) => {
            data.bottom = (data.bottom + (100/(time_duration * FPS )))%100 //translate Y in each frame
        } )
    }, [timeFrame]);

    return (
        <div className={styles['wrapper']}>
            {BUBBLES_DATAs.map( (data, index) => {
                return (
                    <Bubble left={`${data.left}%`} url={data.url} delay={`${1}`} bottom={`${data.bottom}%`} />
                )
            } )}
        </div>
    );
}

export default BubbleImages;
