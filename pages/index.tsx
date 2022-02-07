import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import {number} from "prop-types";

const Home: NextPage = () => {


    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");


    let end: Date = new Date('04/09/2022 10:00 PM');

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timero: NodeJS.Timeout;


    function showRemaining() {
        let distance = Math.abs(new Date().getTime() - end.getTime());

        if (distance < 0) {

            clearInterval(timero);
            return;
        }

        setDays(Math.floor(distance / _day).toString());
        setHours(Math.floor((distance % _day) / _hour).toString());
        setMinutes(Math.floor((distance % _hour) / _minute).toString());
        setSeconds(Math.floor((distance % _minute) / _second).toString());
        // console.log("seconds :", seconds)
    }

    timero = setInterval(showRemaining, 1000);


    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/Love_Heart_symbol.svg"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    I love you 💝
                </h1>

                <h2 className="p-16">
                    Together in {days} days, {hours} hours, {minutes} minutes and {seconds} seconds.
                </h2>


                <h3>(eh ! by the way, I would like to tell you we have at least {81 + (61 - Number(days))} hugs to get
                    back 💕 )</h3>

            </main>


        </div>
    )
}

export default Home
