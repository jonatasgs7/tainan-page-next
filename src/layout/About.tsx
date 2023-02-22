import styles from '@/styles/About.module.css'
import Image from 'next/image'
import { Title } from '@/components/Title'
import { Description } from '@/components/Description'

export function About(){
    return (
        <>
            <div className={styles.about}>

                <div className={styles.about_avatar}>
                    <Image src="/assets/img/foto_tainan.png" width={100} height={100} alt="Foto de perfil | Tainan Gaspar" />
                </div>

                <div className={styles.dialog}>
                    <Image src="/assets/img/dialog_line.svg" width={19.3} height={148} alt="Linha de Diálogo | Tainan Gaspar" />
                </div>

                <div className={styles.about_text}>
                    <Title text="Olá!" />
                    <Description text="Conecto pessoas e marcas através do poder das redes sociais. Entre em contato para saber mais sobre como posso ajudá-lo(a) a aprimorar sua presença online de forma exclusiva e personalizada ao perfil da sua empresa!" />
                </div>

            </div>
        </>
    )
}