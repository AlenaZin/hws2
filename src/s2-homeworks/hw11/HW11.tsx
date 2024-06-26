import React, { ChangeEvent, useEffect, useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

const minDistance = 10;

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', [0, 100]))
    const [value3, setValue3] = useState(0)


    useEffect(()=>{
        setValue3(value1)
    }, [value1])

    useEffect(()=>{
        setValue3(value2[0])
    }, [value2[0]])

    const change = (event: Event, value: number | number[], activeThumb: number) => {
        if (!Array.isArray(value)) {
        return setValue1(value);
        }

        if (activeThumb === 0) {
        setValue2([Math.min(value[0], value2[1] - minDistance), value2[1]]);
        } else {
        setValue2([value2[0], Math.max(value[1], value2[0] + minDistance)]);
        }
    };


    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value3}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            // сделать так чтоб value1 изменялось // пишет студент
                            onChange={change}
                            value={value3}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value3}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                            onChange={change}
                            value={[value3, value2[1]]}
                            valueLabelDisplay="auto"
                            disableSwap
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
