export const CardComponent = () => {
    return(
        <section className="flex flex-col gap-10 items-center bg-gradient-to-r from-cyan-400 to-sky-500 h-full w-full p-10">

            <button className="peer bg-slate-300 px-10 py-2 whitespace-nowrap rounded-sm">
                Girar tarjeta
            </button>

            <div className="relative w-96 h-max [transform-style:preserve-3d] peer-hover:[transform:rotateY(180deg)] transition-all duration-500 bg-purple-500 rounded-xl shadow-lg shadow-zinc-700">
                <div className="h-full w-full p-4 [backface-visibility:hidden]">
                    <p className="text-center font-roboto font-bold text-3xl underline">
                        Cara de Adelante
                    </p>
                    <p className="text-center font-roboto font-semibold text-base mb-4 text-slate-300">
                        Este es un subtitulo
                    </p>
                    <p className="hyphens-auto tracking-normal leading-tight">
                        Lorem ipsum dolor sit amet consectetuasdfasfasdfasdfasdfasdfasdfdsafdsafasdfadsfsdfr adipisicing elit. Quibusdam deserunt facere non nulla, illum architecto placeat consectetur, odio eos voluptatibus pariatur nisi fuga, aut nobis hic amet nostrum esse tenetur!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus amet, suscipit omnis eum nesciunt eveniet esse voluptate nostrum perspiciatis vitae magni possimus deleniti quo. Harum sapiente similique porro laboriosam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea totam esse aliquid tempora, quos, eligendi, repudiandae cumque possimus numquam asperiores earum. Veritatis consectetur enim doloremque cupiditate error incidunt quis.
                    </p>
                </div>
                <div className="absolute top-0 h-full w-full p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cyan-200 rounded-xl">
                    <p className="text-center font-roboto font-bold text-3xl underline">
                        Cara de Atras
                    </p>
                    <p className="text-center font-roboto font-semibold text-base mb-4 text-slate-300">
                        Este es el subtitulo de atras
                    </p>
                    <p className="hyphens-auto tracking-normal leading-tight">
                        Lorem ipsum dolor sit amet consectetuasdfasfasdfasdfasdfasdfasdfdsafdsafasdfadsfsdfr adipisicing elit. Quibusdam deserunt facere non nulla, illum architecto placeat consectetur, odio eos voluptatibus pariatur nisi fuga, aut nobis hic amet nostrum esse tenetur!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus amet, suscipit omnis eum nesciunt eveniet esse voluptate nostrum perspiciatis vitae magni possimus deleniti quo. Harum sapiente similique porro laboriosam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea totam esse aliquid tempora, quos, eligendi, repudiandae cumque possimus numquam asperiores earum. Veritatis consectetur enim doloremque cupiditate error incidunt quis.
                    </p>
                </div>
            </div>

            <div className="h-32 w-32 hover:rotate-[360deg] bg-slate-700 rounded-md peer-hover:bg-slate-400 transition-all duration-500">
                
            </div>

        </section>
    )
}