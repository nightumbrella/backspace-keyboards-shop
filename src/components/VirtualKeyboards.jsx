import React, { useEffect } from 'react'
import SelectSwitches from './SelectSwitches'
import { Howl } from 'howler';
import {keySound} from '../../keys'
import {Link} from 'react-router-dom'
import {motion as m} from 'framer-motion'
const VirtualKeyboards = () => {

    const letters = [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
      ];

      const SoundOpen = (e) => {
        const keys = e.key.toLowerCase()
        if(keys in keySound){
            const sound = new Howl({
                src:keySound[keys]
            })
            sound.play()
        }
      }

      const HandleKeys = (e) => {
        if(letters.find(letter => letter === e.key ) || e.key === ""){
            const classFind = document.querySelector(`.${e.key}`)
            classFind.classList.add("scale-95")
        }
      }
      const RemoveKeys = (e) => {
        if(letters.find(letter => letter === e.key ) || e.key === ""){
            const classFind = document.querySelector(`.${e.key}`)
            classFind.classList.remove("scale-95")
        }
      }

      useEffect(() => {
        window.addEventListener("keydown",HandleKeys)
        window.addEventListener("keyup",SoundOpen)
        window.addEventListener("keyup",RemoveKeys)
        return () => {
            window.removeEventListener("keydown",HandleKeys)
            window.removeEventListener("keyup",SoundOpen)
            window.removeEventListener("keyup",RemoveKeys)
        }
      },[])
    return (
        <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.2}} className='backdrop-blur-md w-full h-full absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <Link to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 -translate-x-2/4 cursor-pointer h-8 absolute top-8 left-2/4 text-white ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            </Link>

            <div className='absolute top-28'>
                <SelectSwitches />
            </div>
            <div className='w-[930px] h-[360px] border-2 border-black bg-black rounded-md'>
                <div className='first__layer flex items-center gap-[3px]  pt-1'>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                </div>
                <div className='first__layer flex items-center gap-[3px]  pt-1'>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[113px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[92px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                </div>
                <div className='first__layer flex items-center gap-[3px]  pt-1'>
                    <div className='  border border-[#161b1a] rounded-md w-[84px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[66px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className=' q  border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            Q
                        </div>
                    </div>
                    <div className='w border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            W
                        </div>
                    </div>
                    <div className='e border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            E
                        </div>
                    </div>
                    <div className='r border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            R
                        </div>
                    </div>
                    <div className='t border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            T
                        </div>
                    </div>
                    <div className='y border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            Y
                        </div>
                    </div>
                    <div className='u border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            U
                        </div>
                    </div>
                    <div className='i border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            I
                        </div>
                    </div>
                    <div className=' o border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            O
                        </div>
                    </div>
                    <div className=' p border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            P
                        </div>
                    </div>
                    <div className='  border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333] text-sm'>
                            {"{"}
                        </div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333] text-sm'>
                            {"}"}
                        </div>
                    </div>
                    {/* \ */}
                    <div className='border border-[#161b1a] rounded-md w-[84px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[66px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'>
                            {" "}
                        </div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                </div>
                <div className='first__layer flex items-center gap-[3px]  pt-1'>
                    <div className=' border border-[#161b1a] rounded-md w-[110px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[95px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='a border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            A
                        </div>
                    </div>
                    <div className=' s border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            S
                        </div>
                    </div>
                    <div className='d border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            D
                        </div>
                    </div>

                    <div className='f border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            F
                        </div>
                    </div>
                    <div className='g border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            G
                        </div>
                    </div>
                    <div className='h border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            H
                        </div>
                    </div>
                    <div className='j border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            J
                        </div>
                    </div>
                    <div className='k border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            K
                        </div>
                    </div>
                    <div className='l border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            L
                        </div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            ;
                        </div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            "
                        </div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[122px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[105px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                </div>
                <div className='first__layer flex items-center gap-[3px]  pt-1'>
                    <div className=' border border-[#161b1a] rounded-md w-[137px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[120px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='z border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            Z
                        </div>
                    </div>
                    <div className='x border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            X
                        </div>
                    </div>
                    <div className='c border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            C
                        </div>
                    </div>

                    <div className='v border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            V
                        </div>
                    </div>
                    <div className='b border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            B
                        </div>
                    </div>
                    <div className='n border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            N
                        </div>
                    </div>
                    <div className='m border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6] '>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            M
                        </div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6] '>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]  flex items-start justify-center text-[#333]'>
                            {"<"}
                        </div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6] '>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            {">"}
                        </div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            /
                        </div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[92px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[85px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M4.5 15.75l7.5-7.5 7.5 7.5'
                                />
                            </svg>
                        </div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                </div>
                <div className='first__layer flex items-center gap-[3px]  pt-1'>
                    <div className='border border-[#161b1a] rounded-md w-[79.5px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[65px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[79.5px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[65px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>

                    <div className='border border-[#161b1a] rounded-md w-[79.5px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[65px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='Space border border-[#d6d6d6] rounded-md w-[330px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[295px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#161b1a] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#161b1a]'>
                        <div className='w-[42px] h-[42px] border border-[#333335] rounded-md bg-[#333335]'></div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.75 19.5L8.25 12l7.5-7.5'
                                />
                            </svg>
                        </div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                />
                            </svg>
                        </div>
                    </div>
                    <div className='border border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center bg-[#d6d6d6]'>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1] flex items-start justify-center text-[#333]'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    )
}

export default VirtualKeyboards