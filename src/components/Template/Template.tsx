import { useState } from 'react'

import { AboutSection } from '../AboutSection/AboutSection'
import { ContactSection } from '../ContactSection/ContactSection'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { Section } from '../Section/Section'
import { ServiceAreasSection } from '../ServiceAreasSection/ServiceAreasSection'
import { Sidebar } from '../Sidebar/Sidebar'
import { Splash } from '../Splash/Splash'
import { TeamSection } from '../TeamSection/TeamSection'

import contactItems from '../../data/contact.json'
import allMenuItems from '../../data/menu.json'
import allServices from '../../data/services.json'
import allSocialMediaLinks from '../../data/socialMedia.json'
import allSpecialtyItems from '../../data/specialties.json'
import allTeamMembers from '../../data/team.json'

import './Template.css'

export function Template() {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    const toggleMenu = () => {
        setMenuOpen((current) => !current)
    }

    const menus = allMenuItems.filter((item) => item.enabled)
    const services = allServices.filter((item) => item.enabled)
    const social = allSocialMediaLinks.filter((item) => item.enabled)
    const specialties = allSpecialtyItems.filter((item) => item.enabled)
    const team = allTeamMembers.filter((item) => item.enabled)

    return (
        <>
            {/* <!-- Navbar (sit on top) --> */}
            <Navbar menuItems={menus} menuToggleClicked={toggleMenu} />

            {/* <!-- Sidebar on small screens when clicking the menu icon --> */}
            <Sidebar close={closeMenu} isOpen={isMenuOpen} menuItems={menus} />

            {/* <!-- Header with full-height image --> */}
            <Splash links={social} />

            {/* <!-- What we do Section --> */}
            <Section
                id="work"
                title="WHAT WE DO"
                description="What we've done for people"
                bgColor="1"
            >
                <ServiceAreasSection services={services} />
            </Section>

            {/* <!-- Why we do it Section --> */}
            {/* <Section
                id="about"
                title="WHY WE DO IT"
                description="Key features of our company"
                topBgColor="1"
                bgColor="2"
            >
                <AboutSection data={specialties} />
            </Section> */}

            {/* <!-- Who we are Section --> */}
            <Section
                id="team"
                title="WHO WE ARE"
                description="The ones who runs this company"
                topBgColor="1"
                bgColor="3"
            >
                <TeamSection members={team} />
            </Section>

            {/* <!-- Modal for full size images on click--> */}
            <div
                id="modal01"
                className="w3-modal w3-black"
                // onclick="this.style.display='none'"
            >
                <span
                    className="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright"
                    title="Close Modal Image"
                >
                    ×
                </span>
                <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                    <img id="img01" alt="something" className="w3-image" />
                    <p id="caption" className="w3-opacity w3-large"></p>
                </div>
            </div>

            {/* <!-- Promo Section - "We know design" --> */}
            {/* <PromoSection /> */}

            {/* <!-- Promo Section "Statistics" --> */}
            {/* <StatisticsSection
                clientCount={89}
                meetingCount={150}
                partnerCount={14}
                projectCount={55}
            /> */}

            {/* <!-- Skills Section --> */}
            {/* <SkillsSection /> */}

            {/* <!-- Pricing Section --> */}
            {/* <PricingSection /> */}

            {/* <!-- Contact Section --> */}
            <Section
                id="contact"
                title="CONTACT US"
                description="Ready to take the next step towards transforming your data and AI strategy?<br/>Reach out to us for a personalized consultation where your business vision meets our strategic expertise."
                topBgColor="3"
                bgColor="light"
                spacingBottom='large'
            >
                <ContactSection data={contactItems} />
            </Section>

            {/* <!-- Footer --> */}
            <Section id="footer" bgColor="zegoda" spacingTop='none'>
                <Footer links={social} />
            </Section>
        </>
    )
}
