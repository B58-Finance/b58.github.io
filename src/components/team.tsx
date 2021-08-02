import { defineMessages } from 'react-intl'
import f from "../lib/translate";
import TeamAvatar from './team-avatar';

const messages = defineMessages({
  teamTitle: {
    id: 'team.title',
    defaultMessage: 'We are the Team that is building it for you'
  },
  teamBody: {
    id: 'team.body',
    defaultMessage: 'Our Team is building to use ourselves, which result in a high-quality product for you to use as well.'+
    '{br}'+
    'We\'re committed to delivering the best in software development bringing a vast background from Enterprise Software, Cloud Engineer and Cyber Security.'
  },
  teamRoleCoFounder: {
    id: 'team.role.cofounder',
    defaultMessage: 'Co-Founder'
  },
  teamRoleDeveloper: {
    id: 'team.role.developer',
    defaultMessage: 'Developer'
  },
  teamRoleAdvisor: {
    id: 'team.role.advisor',
    defaultMessage: 'Advisor'
  },
  teamDescriptionFrancis: {
    id: 'team.description.francis',
    defaultMessage: '20 years of experience in Software Development, working with a variety of languages. And being part of projects in South America as consultant, living and helping to develop the Social Security System of Angola Africa, and working as a Cyber Security Engineer at a Global Bank.'
  },
  teamDescriptionFlavio: {
    id: 'team.description.flavio',
    defaultMessage: '20 years of experience in Backend Development specialized in developing Enterprise tools and integrations in SAP ecosystem, focused on Supply Chain, Manufacturing and Financial. As a consultant have worked with multinational companies and automakers such as Fiat and Chrysler.'
  },
  teamDescriptionGabriel: {
    id: 'team.description.gabriel',
    defaultMessage: '11 years of experience in Software Development and Mobile specialist delivering cross-platform solutions, working developing custom ERP Systems for the Brazilian Market, and currently developing a iOS and Android Mobile solution for Health Insurance companies in the USA.'
  },
})

const Team = () => {

  return (
    <section id="team" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
      <div className="lg:mt-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-6 row-gap-0 md:row-gap-6 lg:mb-10">
        <div className="flex flex-wrap content-center p-6">
          <h1 className="text-3xl lg:text-6xl font-medium leading-tight">
            {f(messages.teamTitle)}
          </h1>
        </div>
        <div className="lg:ml-6 p-6 pt-2 lg:pt-6">
          <p className="text-base text-justify lg:text-left lg:mr-8">
          {f(messages.teamBody,{
              br: <><br/><br/></>              
            })}
          </p>
        </div>
      </div>
      <div className="p-6 lg:mt-6 grid grid-cols-1 md:grid-cols-3 md:col-gap-28 row-gap-0 md:row-gap-6 lg:mb-10">
        <TeamAvatar 
          name="Francis Luz"
          img="/images/francis.jpeg"
          role={f(messages.teamRoleCoFounder)}
          linkedin="francisluz"
          github="francisluz"
          description={f(messages.teamDescriptionFrancis)}
        />
        <TeamAvatar 
          name="Flavio Rasseli"
          img="/images/flavio.jpeg"
          role={f(messages.teamRoleCoFounder)}
          linkedin="frasseli"
          github="frasseli"
          description={f(messages.teamDescriptionFlavio)}
        />
        <TeamAvatar 
          name="Gabriel Guarnieri"
          img="/images/gabriel.jpeg"
          role={f(messages.teamRoleCoFounder)}
          linkedin="gabrielgc"
          github="gabrielgc"
          description={f(messages.teamDescriptionGabriel)}
        />
      </div>
    </section>
  )
}

export default Team
