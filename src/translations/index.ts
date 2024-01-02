import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  defaultNS: "translations",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  lng: "en",
  resources: {
    en: {
      translations: {
        aboutDescription:
          "In 2013, I created my first website as part of a school project. Over the years I have had the opportunity to work for: creative agencies, start-ups, large corporations and as an independent freelancer. I strive to create solutions that not only present aesthetic design, but above all provide users with functionality and usability. In addition to writing code, I focus on deeply understanding the needs of my clients, which allows me to create solutions tailored to their specific expectations and business goals.",
        aboutDownload: "Download resume",
        aboutPhoto: "Mateusz Piotrowicz",
        aboutTitle: "Hello!",
        contactEmailRequiredField:
          "Field required. Please enter correct e-mail.",
        contactError: "An error occured",
        contactMail: "piotrowiczmateuszz@gmail.com",
        contactMailLabel: "E-mail",
        contactMessageLabel: "Message",
        contactName: "Mateusz Piotrowicz",
        contactNameLabel: "Name",
        contactPhone: "(+48) 661 033 093",
        contactRequiredField: "Field required.",
        contactSend: "Send",
        contactSuccess: "Message sent",
        contactText:
          "You can contact me via the form or using the contact details below.",
        contactTitle: "Let's be in touch!",
        experienceHonkiDesc:
          "My main responsibilities included not only developing and maintaining websites and online stores for clients, but also active participation in the creation of various custom SaaS products. As part of these activities, I was involved in the design and development of Content Management System (CMS), e-mailing applications and administration panels for e-commerce platforms.",
        experienceMangomediaDesc:
          "As a person responsible for the front-end development of internet products, including websites and e-commerce platforms, my role focused mainly on the implementation of the designed solutions. When working on the delivered projects, my goal was not only to provide an aesthetic and functional interface, but also to focus on optimizing the performance and responsiveness of the websites.",
        experienceMillenniumDesc:
          "As part of the project, various versions of loan application forms dedicated to entrepreneurs were prepared. My responsibilities included a wide range of tasks, from coding and testing to documentation, code review, and collaboration with analysts, designers, and other teams across the organizational structure. Our goal was to provide comprehensive solutions and integrate many modules, which required close cooperation and coordination of activities between various teams. After the successful implementation of the first versions of the forms, the application was developed, taking into account user feedback and updates related to new regulatory requirements.",
        experiencePresent: "present",
        experienceScopeDesc:
          "The client in this project was a provider of services related to credit ratings, fund analysis and solutions dedicated to risk assessment and monitoring. My role in this project was to actively participate in the team responsible for creating and developing React applications and expanding the functionality of existing libraries. My tasks also included active participation in the creation of microfrontend architecture, which helped to create flexible and modular approach to building applications. Additionally, I implemented Design Systems that were used in other project modules, which contributed to maintaining the consistency of the user interface at various levels of the application.",
        experienceTitle: "Experience",
        navAbout: "About",
        navContact: "Contact",
        navExperience: "Experience",
        navLogo1: "mateusz",
        navLogo2: "piotrowicz",
        navPortfolio: "Portfolio",
        portfolioTitle: "Selected projects",
      },
    },
    pl: {
      translations: {
        aboutDescription:
          "W 2013 roku stworzyłem swoją pierwszą stronę internetową w ramach szkolnego projektu. Przez lata w branży internetowej miałem okazję pracować dla: agencji kreatywnych, start-upów, dużych korporacji oraz jako niezależny freelancer. Dążę do tworzenia rozwiązań, które nie tylko prezentują estetyczny design, ale przede wszystkim zapewniają użytkownikom funkcjonalność oraz użyteczność. Oprócz pisania kodu, kładę nacisk na głębokie zrozumienie potrzeb moich klientów, co umożliwia mi tworzenie rozwiązań dopasowanych do ich konkretnych oczekiwań i celów biznesowych.",
        aboutDownload: "Pobierz CV",
        aboutPhoto: "Mateusz Piotrowicz",
        aboutTitle: "Cześć!",
        contactEmailRequiredField: "Pole wymagane. Wpisz poprawny e-mail.",
        contactError: "Wystąpił błąd",
        contactMail: "piotrowiczmateuszz@gmail.com",
        contactMailLabel: "E-mail",
        contactMessageLabel: "Wiadomość",
        contactName: "Mateusz Piotrowicz",
        contactNameLabel: "Imię i nazwisko",
        contactPhone: "(+48) 661 033 093",
        contactRequiredField: "Pole wymagane.",
        contactSend: "Wyślij",
        contactSuccess: "Wysłano wiadomość",
        contactText:
          "Możesz skontaktować się ze mną poprzez formularz lub używając podanych niżej danych kontaktowych.",
        contactTitle: "Bądźmy w kontakcie!",
        experienceHonkiDesc:
          "Moje główne obowiązki obejmowały nie tylko rozwijanie i utrzymywanie stron oraz sklepów internetowych dla klientów, ale również aktywny udział w tworzeniu różnorodnych niestandardowych produktów typu SaaS. W ramach tych działań byłem zaangażowany w projektowanie i rozwój systemów Content Management System (CMS), aplikacji e-mailingowych oraz paneli administracyjnych dla platform e-commerce.",
        experienceMangomediaDesc:
          "Jako osoba odpowiedzialna za rozwój front-endu produktów internetowych, w tym serwisów oraz platform e-commerce, moja rola skupiała się głównie na implementacji zaprojektowanych rozwiązań. Pracując nad dostarczonymi projektami, moim celem było nie tylko zapewnienie estetycznego i funkcjonalnego interfejsu, ale także skupienie się na optymalizacji wydajności oraz responsywności stron.",
        experienceMillenniumDesc:
          "W ramach projektu zostały przygotowane różne wersje formularzy wniosków kredytowych dedykowane przedsiębiorcom. Moje odpowiedzialności obejmowały szeroki zakres zadań, począwszy od kodowania i testowania po dokumentację, przegląd kodu oraz współpracę z analitykami, projektantami i innymi zespołami w całej strukturze organizacyjnej. Naszym celem było dostarczenie kompleksowych rozwiązań oraz integracja wielu modułów, co wymagało bliskiej współpracy i koordynacji działań pomiędzy różnymi zespołami. Po udanym wdrożeniu pierwszych wersji formularzy, aplikacja była rozwijana, uwzględniając feedback użytkowników oraz aktualizacje związane z nowymi wymogami regulacyjnymi.",
        experiencePresent: "obecnie",
        experienceScopeDesc:
          "Klientem w tym projekcie był dostawcą usług związanych z ratingami kredytowymi, analizą funduszy oraz rozwiązaniami dedykowanymi do oceny i monitorowania ryzyka. Moja rola w ramach tego projektu polegała na aktywnym udziale w zespole odpowiedzialnym za tworzenie i rozwijanie aplikacji React oraz rozbudowie funkcjonalności istniejących bibliotek. Moje zadania obejmowały także aktywny udział w tworzeniu architektury mikrofrontendów, co pozwoliło na elastyczne i modularne podejście do budowy aplikacji. Dodatkowo, wdrażałem Design System, które były wykorzystywane w innych modułach projektu, co przyczyniło się do utrzymania spójności interfejsu użytkownika na różnych poziomach aplikacji.",
        experienceTitle: "Doświadczenie",
        navAbout: "O mnie",
        navContact: "Kontakt",
        navExperience: "Doświadczenie",
        navLogo1: "mateusz",
        navLogo2: "piotrowicz",
        navPortfolio: "Portfolio",
        portfolioTitle: "Wybrane realizacje",
      },
    },
  },
});

export default i18next;
