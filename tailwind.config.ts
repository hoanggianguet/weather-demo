import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        '1200': '1200px',
        'navbar': '224px',
        '901': '901px',
        '840': '840px',
        '612':'612px',
        '565':'565px',
        '352':'352px',
        '150':'150px',
        '142': '142px',
        '438': '438px',
        '32': '32px',
        '34': '34px',
        '186': '186px',
        '96': '96px',
        '100': '100px',
        '171': '171px',
        '136': '136px',
        '114': '114px',
        '160': '160px',
        '167': '167px',
        '175': '175px'
      },
      colors: {
        'header': '#156C80',
        'header2': '#46A2BA',
        'white1': '#FBFBFB',
        'white': '#ffffff',
        'F6F6F6': '#F6F6F6',
        'DAA43F': '#DAA43F',
        '156C80': '#156C80',
        'CCCCCC':'#CCCCCC',
        '2a2a2a': '#2A2A2A',
        'cc5666': '#CC5666',
        'daa43f': '#daa43f',
        'b5c5e7': '#b5c5e7',
        '3a71ca': '#3a71ca',
        '666666': '#666666',
        'bbbbbb': '#BBBBBB',
        'f7f7f9': '#F7F7F9',
        '004ad2':'#004ad2',
        '4f4f4f':'#4f4f4f'
      },
      height: {
        'navbar': '952px',
        '60': '60px',
        '93': '93px',
        '84':'84px',
        '88':'88px',
        '71':'71px',
        '154':'154px',
        '38':'38px',
        '200':'200px',
        '44':'44px',
        '34':'34px',
        '105':'105px',
        '76':'76px'
      },
      margin: {
        '34': '34px',
        '35': '35px',
        '18':'18px',
        '224': '224px',
        '10': '10px',
        '22': '22px',
        '24': '24px',
        '30': '30px',
        '16': '16px',
        '89': '89px',
        '28': '28px',
        '165': '165px',
        '65': '65px',
        '32': '32px',
        '181': '181px',
        '197': '197px',
        '11': '11px',
        '186': '186px',
        '44': '44px',
        '37': '37px',
        '51': '51.5px',
        '40': '40px',
        '48px': '48px'
      },
      fontSize: {
        '26': '26px',
        '18': '18px',
        '13': '13px',
        '16': '16px',
        '20': '20px',
        '14': '14px'
      },
      padding: {
        '18': '18px',
        '19': '19px',
        '20': '20px',
        '16': '16px',
        '14': '14px',
        '35': '35px',
        '12': '12px',
        '48': '48px',
      },
      borderWidth: {
        '1':'1px'
      },
      borderRadius: {
        '5': '5px'
      }
    },
  },
  plugins: [],
};
export default config;
