import styles from '@/styles/Socials.module.css'
import { Icon } from '@/components/Icon'
import { WhatsappLogo, InstagramLogo, FacebookLogo, LinkedinLogo } from 'phosphor-react'

export function Socials(){
    return (
        <>
            <div className={styles.socials}>
                <Icon url={"https://wa.me/5521967674521"} title={"Converse comigo no WhatsApp"} icon={<WhatsappLogo />} highlight={true} />   
                <Icon url={"https://www.instagram.com/tainan.gaspar/"} title={"Acesse meu perfil no Instagram"} icon={<InstagramLogo/>} highlight={false} />   
                <Icon url={"https://www.facebook.com/SMtainan.gaspar"} title={"Acesse minha página no Facebook"} icon={<FacebookLogo/>} highlight={false} />   
                <Icon url={"https://www.linkedin.com/in/tainan-gaspar/"} title={"Acesse meu Linkedin"} icon={<LinkedinLogo />} highlight={false} />   
            </div>
        </>
    )
}