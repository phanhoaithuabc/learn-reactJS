import clsx from 'clsx'
import styles from './Button.module.scss'

function Button({ primary, disable }){
    const classes = clsx(styles.btn, {
        [styles.primary] : primary,
        // 'd-flex': true
        'd-flex': false,
        [styles.disable]: disable,
    })
    return <>
        <button className={styles.btn}>Button 1</button>
        <button 
            // className={`${styles.btn} ${styles.active}`}>
            // className={[styles.btn, styles.active].join(' ')}>
            // className={clsx(styles.btn, styles.active)}>
            // className={clsx(styles.btn, {
            //     // xu ly logic
            //     [styles.active] : true
            // })}>
            className={classes}>
            Button 2
        </button>
    </>
}

export default Button