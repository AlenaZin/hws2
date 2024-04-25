import React, {useRef, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    //const timer = useRef<number>();

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)
       // timer.current = +intervalId;
        return setTimerId(+intervalId)
    }

    const stop = () => {
        // if (timer.current) {
        //     clearInterval(timer.current);
        //     timer.current = undefined;
        // }
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        timerId && clearInterval(timerId);
        setTimerId(undefined)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString("en-US", { hour12: false })
    const stringDate = new Intl.DateTimeFormat("ru") // день.месяц.год (01.02.2022) 

    
    const stringDay = new Intl.DateTimeFormat("en-US", {weekday: "long"})  
    const stringMonth = new Intl.DateTimeFormat("en-US", {month: "long"})

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay.format(date)}</span>,{' '}
                <span id={'hw9-time'}>                    
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth.format(date)}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate.format(date)}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId ? true : false} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId ? true : false} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
