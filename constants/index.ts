import onboarding1 from '@/assets/images/onboarding1.png'
import onboarding2 from '@/assets/images/onboarding2.png'
import onboarding3 from '@/assets/images/onboarding3.png'
import textLogo from '@/assets/images/logo-with-text.png'
import person from "@/assets/icons/person.png";
import email from "@/assets/icons/email.png";
import lock from "@/assets/icons/lock.png";
import google from "@/assets/icons/google.png"
export const images={
    onboarding1,
    onboarding2,
    onboarding3,
    textLogo
}

export const icons ={
    person,
    email,
    lock,
    google
}

export const onboarding = [
    {
        id:1,
        title:'Lost in Screens? ',
        description:'Unplugged helps you reconnect—with friends, loved ones, and yourself. Avoid those moments when everyone pulls out their phone without reason, and stay truly present.',
        image:onboarding1,
    },
    {
        id:2,
        title:'Start a Phone-Free Session ',
        description:'Challenge your group to stay present and engaged, resisting the temptation to check their phones—whether you’re with friends or spending quality time as a couple.',
        image:onboarding2,
    },
    {
        id:3,
        title:'Find Time for Yourself ',
        description:'Unplug and spend uninterrupted moments with yourself, free from distractions, allowing for reflection and focus.',
        image:onboarding3,
    }
]