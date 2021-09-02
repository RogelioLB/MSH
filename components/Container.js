import Head from 'next/head'

const Container = ({children,title}) =>{
    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}

export default Container;