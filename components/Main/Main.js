import Main from './Main.module.css'
import Container from '../Container'
import React from 'react'
import HeadBar from '../HeadBar/HeadBar'
import BottomBar from '../BottomBar/BottomBar'

const MainComponent = ({title,children}) => {
    return (
        <Container title={title}>
            <main className={Main.container}>
                <HeadBar className={Main.head} />
                <section className={Main.music_container}>
                    {children}
                </section>
                <BottomBar className={Main.bottom_bar}/>
            </main>
        </Container>
    )
}

export default MainComponent;
