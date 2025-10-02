import classPng from '../../assets/Class.png'
import st from './ClassReminder.module.scss'

type Props = {}

export default function ClassReminder({}: Props) {
    return (
        <div className={st.root}>
            <div className={st.container}>
                <p className={st.title}>
                    NEVER FORGET <span>ABOUT THE CLASS!</span>
                </p>
               <div className={st.image}>
                   <img src={classPng} alt=''/>
                </div>
            </div>
        </div>
    )
}
