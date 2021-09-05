const Button = ({children,onClick}) => {
    return (
        <div className="btn">
        <button onClick={onClick}>
            {children}
        </button>
        <style jsx>
                {`
                    .btn{
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                }

                .btn button{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:45px;
                    width:45px;
                    cursor:pointer;
                    padding:15px 15px;
                    border:none;
                    border-radius:50%;
                    outline:none;
                    background:white;
                    transition:background .1s;
                }
                .btn button:hover{
                    background:#b2bec3;
                }
            
                `}
            </style>
        </div>
    )
}

export default Button
