<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

useHead({
  title: computed(() => isEn.value ? 'Privacy Policy — Doblyx AI' : 'Datenschutzerklärung — Doblyx AI'),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <div>
    <Navbar />

    <section class="pt-40 pb-24 px-6" style="background: #FAFAFA">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-4 tracking-tight" style="color: #0F1419">
          {{ isEn ? 'Privacy Policy' : 'Datenschutzerklärung' }}
        </h1>
        <p class="mb-12 text-sm" style="color: #999">
          {{ isEn ? 'Last updated: January 2025' : 'Stand: Januar 2025' }}
        </p>

        <div class="space-y-10 text-[15px] leading-relaxed" style="color: #555">

          <!-- 1 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '1. Data Controller' : '1. Verantwortlicher' }}
            </h2>
            <p v-if="isEn">
              The data controller within the meaning of the General Data Protection Regulation (GDPR) and other applicable data protection laws is:
            </p>
            <p v-else>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p class="mt-3">
              Doblyx AI GmbH<br />
              Schildbach 42<br />
              8230 Hartberg<br />
              {{ isEn ? 'Austria' : 'Österreich' }}
            </p>
            <p class="mt-3">
              {{ isEn ? 'Represented by' : 'Vertreten durch' }}: Eric Dobler ({{ isEn ? 'Managing Director' : 'Geschäftsführer' }})<br />
              {{ isEn ? 'Email' : 'E-Mail' }}: office@doblyx.com<br />
              {{ isEn ? 'Phone' : 'Telefon' }}: +43 676 5800866
            </p>
          </div>

          <!-- 2 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '2. General Information on Data Processing' : '2. Allgemeines zur Datenverarbeitung' }}
            </h2>
            <p v-if="isEn">
              The protection of your personal data is important to us. We process personal data only insofar as it is necessary to provide a functional website and our content and services. Personal data is processed only with the user's consent or when processing is permitted by law.
            </p>
            <p v-else>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers oder wenn die Verarbeitung durch gesetzliche Vorschriften gestattet ist.
            </p>
          </div>

          <!-- 3 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '3. Your Rights as a Data Subject' : '3. Ihre Rechte als betroffene Person' }}
            </h2>
            <p class="mb-4">
              {{ isEn ? 'You have the following rights regarding your personal data processed by us:' : 'Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:' }}
            </p>
            <ul v-if="isEn" class="space-y-3 list-none">
              <li><strong style="color: #0F1419">Right of Access (Art. 15 GDPR):</strong> You may request information about your personal data processed by us.</li>
              <li><strong style="color: #0F1419">Right to Rectification (Art. 16 GDPR):</strong> You may request the correction of inaccurate or the completion of incomplete personal data stored by us.</li>
              <li><strong style="color: #0F1419">Right to Erasure (Art. 17 GDPR):</strong> You may request the deletion of your personal data stored by us, unless processing is required for exercising the right of freedom of expression, for compliance with a legal obligation, for reasons of public interest, or for the establishment, exercise, or defense of legal claims.</li>
              <li><strong style="color: #0F1419">Right to Restriction of Processing (Art. 18 GDPR):</strong> You may request the restriction of processing of your personal data.</li>
              <li><strong style="color: #0F1419">Right to Data Portability (Art. 20 GDPR):</strong> You may request to receive your personal data in a structured, commonly used, and machine-readable format or to have it transmitted to another controller.</li>
              <li><strong style="color: #0F1419">Right to Object (Art. 21 GDPR):</strong> You may object to the processing of your personal data at any time if the processing is based on Art. 6(1)(e) or (f) GDPR.</li>
              <li><strong style="color: #0F1419">Right to Withdraw Consent (Art. 7(3) GDPR):</strong> You may withdraw your consent at any time. The lawfulness of processing carried out on the basis of consent before its withdrawal is not affected.</li>
            </ul>
            <ul v-else class="space-y-3 list-none">
              <li><strong style="color: #0F1419">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
              <li><strong style="color: #0F1419">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
              <li><strong style="color: #0F1419">Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</li>
              <li><strong style="color: #0F1419">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
              <li><strong style="color: #0F1419">Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen verlangen.</li>
              <li><strong style="color: #0F1419">Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einlegen, wenn die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt.</li>
              <li><strong style="color: #0F1419">Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können Ihre einmal erteilte Einwilligung jederzeit gegenüber uns widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung wird dadurch nicht berührt.</li>
            </ul>
            <div class="mt-4 p-5 rounded-xl" style="background: rgba(10,31,68,0.03)">
              <p v-if="isEn">
                <strong style="color: #0F1419">Right to Lodge a Complaint with a Supervisory Authority (Art. 77 GDPR):</strong><br />
                Austrian Data Protection Authority<br />
                Barichgasse 40-42, 1030 Vienna, Austria<br />
                Email: dsb@dsb.gv.at<br />
                Website: www.dsb.gv.at
              </p>
              <p v-else>
                <strong style="color: #0F1419">Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong><br />
                Österreichische Datenschutzbehörde<br />
                Barichgasse 40-42, 1030 Wien<br />
                E-Mail: dsb@dsb.gv.at<br />
                Website: www.dsb.gv.at
              </p>
            </div>
          </div>

          <!-- 4 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '4. Hosting and Content Delivery' : '4. Hosting und Content Delivery' }}
            </h2>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '4.1 Website Hosting (GoDaddy)' : '4.1 Website-Hosting (GoDaddy)' }}
            </h3>
            <p v-if="isEn">
              Our website is hosted by GoDaddy. The provider is GoDaddy Operating Company, LLC, 2155 E. GoDaddy Way, Tempe, AZ 85284, USA.
            </p>
            <p v-else>
              Unsere Website wird bei GoDaddy gehostet. Anbieter ist die GoDaddy Operating Company, LLC, 2155 E. GoDaddy Way, Tempe, AZ 85284, USA.
            </p>
            <p v-if="isEn" class="mt-2">
              When you visit our website, the following data is automatically collected (server log files): IP address of the requesting device, date and time of the request, time zone difference to GMT, content of the request (specific page), access status/HTTP status code, data volume transferred, referrer URL, browser used, operating system and its interface, and language and version of the browser software.
            </p>
            <p v-else class="mt-2">
              Bei Aufruf unserer Website werden automatisch folgende Daten (Server-Logfiles) erfasst: IP-Adresse des anfragenden Rechners, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time (GMT), Inhalt der Anforderung (konkrete Seite), Zugriffsstatus/HTTP-Statuscode, jeweils übertragene Datenmenge, Referrer URL, verwendeter Browser, Betriebssystem und dessen Oberfläche sowie Sprache und Version der Browsersoftware.
            </p>
            <p class="mt-2">
              {{ isEn ? 'Processing is based on Art. 6(1)(f) GDPR. Our legitimate interest lies in the technical provision and security of our website.' : 'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der technischen Bereitstellung und Sicherheit unserer Website.' }}
            </p>
            <p class="mt-2">
              {{ isEn ? 'GoDaddy is certified under the EU-US Data Privacy Framework.' : 'GoDaddy ist unter dem EU-US Data Privacy Framework zertifiziert.' }}
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '4.2 Application Hosting (Hostinger)' : '4.2 Anwendungs-Hosting (Hostinger)' }}
            </h3>
            <p v-if="isEn">
              For our automation solutions and services, we use the hosting services of Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Cyprus.
            </p>
            <p v-else>
              Für unsere Automatisierungslösungen und Dienste nutzen wir die Hosting-Dienste von Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern.
            </p>
            <p class="mt-2">
              {{ isEn ? 'Processing is based on Art. 6(1)(b) GDPR (contract performance) and Art. 6(1)(f) GDPR (legitimate interest in the secure and efficient provision of our services).' : 'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung unserer Dienste).' }}
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '4.3 Website Creation (Framer)' : '4.3 Website-Erstellung (Framer)' }}
            </h3>
            <p v-if="isEn">
              Our website was created with Framer and is partially delivered via their infrastructure. The provider is Framer B.V., Rozengracht 207B, 1016 LZ Amsterdam, Netherlands.
            </p>
            <p v-else>
              Unsere Website wurde mit Framer erstellt und wird teilweise über deren Infrastruktur ausgeliefert. Anbieter ist Framer B.V., Rozengracht 207B, 1016 LZ Amsterdam, Niederlande.
            </p>
            <p class="mt-2">
              {{ isEn ? 'When using Framer, technical data such as IP address and browser information may be processed. Processing is based on Art. 6(1)(f) GDPR.' : 'Bei der Nutzung von Framer können technische Daten wie IP-Adresse und Browserinformationen verarbeitet werden. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.' }}
            </p>
          </div>

          <!-- 5 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '5. SSL/TLS Encryption' : '5. SSL-/TLS-Verschlüsselung' }}
            </h2>
            <p v-if="isEn">
              This website uses SSL/TLS encryption for security reasons and to protect the transmission of confidential content. You can recognize an encrypted connection by the browser address bar changing from "http://" to "https://" and by the lock icon in your browser bar.
            </p>
            <p v-else>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          <!-- 6 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '6. Contact' : '6. Kontaktaufnahme' }}
            </h2>
            <p v-if="isEn">
              When you contact us by email or phone, the data you provide (e.g., name, email address, phone number, content of your inquiry) is stored by us to process your request.
            </p>
            <p v-else>
              Bei der Kontaktaufnahme mit uns per E-Mail oder Telefon werden die von Ihnen mitgeteilten Daten (z.B. Name, E-Mail-Adresse, Telefonnummer, Inhalt Ihrer Anfrage) von uns gespeichert, um Ihre Anfrage zu bearbeiten.
            </p>
            <p class="mt-2">
              {{ isEn ? 'The legal basis for processing is Art. 6(1)(b) GDPR (pre-contractual measures or contract performance) and Art. 6(1)(f) GDPR (legitimate interest in processing inquiries).' : 'Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung oder -erfüllung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).' }}
            </p>
            <p class="mt-2">
              {{ isEn ? 'The data will be deleted once it is no longer necessary for the purpose of its collection and no statutory retention obligations apply.' : 'Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.' }}
            </p>
          </div>

          <!-- 7 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '7. Cookies and Consent Management' : '7. Cookies und Consent-Management' }}
            </h2>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '7.1 General Information on Cookies' : '7.1 Allgemeines zu Cookies' }}
            </h3>
            <p v-if="isEn">
              Our website uses cookies. Cookies are small text files stored on your device by your browser. They help make our website more user-friendly and effective.
            </p>
            <p v-else>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher und effektiver zu machen.
            </p>
            <p class="mt-2">
              {{ isEn ? 'Some cookies are "technically necessary" and are set automatically as they are required for the website to function. Other cookies (e.g., for analytics or marketing) are only set with your consent.' : 'Einige Cookies sind „technisch notwendig" und werden automatisch gesetzt, da sie für den Betrieb der Website erforderlich sind. Andere Cookies (z.B. für Analyse oder Marketing) werden nur mit Ihrer Einwilligung gesetzt.' }}
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '7.2 Cookiebot (Consent Management)' : '7.2 Cookiebot (Consent-Management)' }}
            </h3>
            <p v-if="isEn">
              We use Cookiebot to manage your cookie preferences. The provider is Cybot A/S, Havnegade 39, 1058 Copenhagen, Denmark.
            </p>
            <p v-else>
              Für die Verwaltung Ihrer Cookie-Einwilligungen nutzen wir Cookiebot. Anbieter ist Cybot A/S, Havnegade 39, 1058 Kopenhagen, Dänemark.
            </p>
            <p v-if="isEn" class="mt-2">
              Cookiebot stores your consent so that it does not need to be requested again on each page visit. The following data is processed: your IP address (anonymized), date and time of consent, browser information, the page URL, and an anonymous random key.
            </p>
            <p v-else class="mt-2">
              Cookiebot speichert Ihre Einwilligungserklärung (Consent), damit diese nicht bei jedem Seitenaufruf erneut abgefragt werden muss. Dabei werden folgende Daten verarbeitet: Ihre IP-Adresse (anonymisiert), Datum und Uhrzeit der Einwilligung, Browser-Informationen, die URL der Seite sowie ein anonymer, zufälliger Schlüssel.
            </p>
            <p class="mt-2">
              {{ isEn ? 'The legal basis is Art. 6(1)(c) GDPR (legal obligation to document consent).' : 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung zur Nachweisführung von Einwilligungen).' }}
            </p>
          </div>

          <!-- 8 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '8. Our Services — AI-Powered Lead Qualification and Automation' : '8. Unsere Dienstleistungen — KI-gestützte Lead-Qualifizierung und Automatisierung' }}
            </h2>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '8.1 Overview of Our Services' : '8.1 Übersicht unserer Dienstleistungen' }}
            </h3>
            <p v-if="isEn">
              We offer AI-powered automation solutions for businesses, particularly in the area of lead generation and qualification. Our services include automated processing of inquiries from various sources, qualification through AI-powered phone calls, and feedback of qualification data to advertising platforms for campaign optimization.
            </p>
            <p v-else>
              Wir bieten KI-gestützte Automatisierungslösungen für Unternehmen an, insbesondere im Bereich der Lead-Generierung und -Qualifizierung. Unsere Dienstleistungen umfassen die automatisierte Verarbeitung von Anfragen aus verschiedenen Quellen, deren Qualifizierung durch KI-gestützte Telefongespräche sowie die Rückführung von Qualifizierungsdaten an Werbeplattformen zur Optimierung von Werbekampagnen.
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '8.2 n8n Workflow Automation' : '8.2 n8n Workflow-Automatisierung' }}
            </h3>
            <p v-if="isEn">
              We use n8n, a workflow automation platform, for automating business processes. It is operated on servers at Hostinger.
            </p>
            <p v-else>
              Für die Automatisierung von Geschäftsprozessen setzen wir n8n ein, eine Workflow-Automatisierungsplattform. Diese wird auf Servern bei Hostinger betrieben.
            </p>
            <p v-if="isEn" class="mt-2">
              The following personal data may be processed as part of workflow automation: contact data (name, email, phone number), inquiry data from forms, conversation logs and qualification results, and processing metadata.
            </p>
            <p v-else class="mt-2">
              Im Rahmen der Workflow-Automatisierung können folgende personenbezogene Daten verarbeitet werden: Kontaktdaten (Name, E-Mail, Telefonnummer), Anfragedaten aus Formularen, Gesprächsprotokolle und Qualifizierungsergebnisse sowie Metadaten zur Verarbeitung.
            </p>
            <p class="mt-2">
              {{ isEn ? 'The legal basis is Art. 6(1)(b) GDPR (contract performance with our business clients) and Art. 6(1)(f) GDPR (legitimate interest of our clients in efficient processing of inquiries).' : 'Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung mit unseren Geschäftskunden) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse unserer Kunden an der effizienten Bearbeitung von Anfragen).' }}
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '8.3 Voicery — AI-Powered Phone Assistant' : '8.3 Voicery — KI-gestützter Telefon-Assistent' }}
            </h3>
            <p v-if="isEn">
              We offer Voicery, an AI-powered phone assistant that conducts automated phone calls for lead qualification. When using Voicery, the following data is processed:
            </p>
            <p v-else>
              Wir bieten mit Voicery einen KI-gestützten Telefon-Assistenten an, der automatisierte Telefongespräche zur Lead-Qualifizierung durchführt. Bei der Nutzung von Voicery werden folgende Daten verarbeitet:
            </p>
            <p v-if="isEn" class="mt-2">
              Phone number of the called party, voice recordings of conversations, transcriptions of conversations, qualification results and extracted information, and metadata such as timestamps, conversation duration, and call status.
            </p>
            <p v-else class="mt-2">
              Telefonnummer des Angerufenen, Sprachaufnahmen der Gespräche, Transkriptionen der Gespräche, Qualifizierungsergebnisse und extrahierte Informationen sowie Metadaten wie Zeitstempel, Dauer der Konversation und Anrufstatus.
            </p>
            <div class="mt-3 p-5 rounded-xl" style="background: rgba(10,31,68,0.03)">
              <p v-if="isEn">
                <strong style="color: #0F1419">Important Notice:</strong> When you are called by our system, you will be informed at the beginning of the call that it is an AI-powered conversation and that the call is being recorded. You have the option to end the call at any time.
              </p>
              <p v-else>
                <strong style="color: #0F1419">Wichtiger Hinweis:</strong> Wenn Sie von unserem System angerufen werden, wird zu Beginn des Gesprächs darauf hingewiesen, dass es sich um ein KI-gestütztes Gespräch handelt und das Gespräch aufgezeichnet wird. Sie haben jederzeit die Möglichkeit, das Gespräch zu beenden.
              </p>
            </div>
            <p class="mt-3">
              {{ isEn ? 'The legal basis is Art. 6(1)(f) GDPR (legitimate interest of our business clients in efficient qualification of inquiries).' : 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse unserer Geschäftskunden an der effizienten Qualifizierung von Anfragen).' }}
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '8.4 Data Storage and CRM Integration' : '8.4 Datenspeicherung und CRM-Integration' }}
            </h3>
            <p>
              {{ isEn ? 'We use the following services for storing and managing processed data:' : 'Zur Speicherung und Verwaltung der verarbeiteten Daten nutzen wir folgende Dienste:' }}
            </p>
            <ul class="mt-3 space-y-3 list-none">
              <li v-if="isEn"><strong style="color: #0F1419">HubSpot:</strong> Contact and qualification data is stored in HubSpot for customer relationship management. The provider is HubSpot, Inc., 25 First Street, Cambridge, MA 02141, USA. HubSpot is certified under the EU-US Data Privacy Framework.</li>
              <li v-else><strong style="color: #0F1419">HubSpot:</strong> Für Customer-Relationship-Management werden Kontakt- und Qualifizierungsdaten in HubSpot gespeichert. Anbieter ist HubSpot, Inc., 25 First Street, Cambridge, MA 02141, USA. HubSpot ist unter dem EU-US Data Privacy Framework zertifiziert.</li>
              <li v-if="isEn"><strong style="color: #0F1419">Google Sheets:</strong> Google Sheets may be used for structured data storage and processing. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Google is certified under the EU-US Data Privacy Framework.</li>
              <li v-else><strong style="color: #0F1419">Google Sheets:</strong> Für die strukturierte Datenspeicherung und -verarbeitung können Google Tabellen genutzt werden. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google ist unter dem EU-US Data Privacy Framework zertifiziert.</li>
            </ul>
            <p class="mt-3">
              {{ isEn ? 'The legal basis is Art. 6(1)(b) GDPR (contract performance). We conclude data processing agreements pursuant to Art. 28 GDPR with our business clients.' : 'Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Mit unseren Geschäftskunden schließen wir entsprechende Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO ab.' }}
            </p>
          </div>

          <!-- 9 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '9. Lead Sources and Webhook Integrations' : '9. Lead-Quellen und Webhook-Integrationen' }}
            </h2>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '9.1 Real Estate Portals' : '9.1 Immobilienportale' }}
            </h3>
            <p>
              {{ isEn ? 'We process inquiries received through real estate portals on behalf of our business clients.' : 'Wir verarbeiten im Auftrag unserer Geschäftskunden Anfragen, die über Immobilienportale eingehen.' }}
            </p>
            <ul v-if="isEn" class="mt-3 space-y-3 list-none">
              <li><strong style="color: #0F1419">ImmobilienScout24:</strong> Provider is Immobilien Scout GmbH, Invalidenstraße 65, 10557 Berlin, Germany. Processing is based on the consent given by the interested party when submitting the inquiry on the portal.</li>
              <li><strong style="color: #0F1419">willhaben:</strong> Provider is willhaben internet service GmbH &amp; Co KG, Landstraßer Hauptstraße 97-101, 1030 Vienna, Austria. Processing is based on the consent given by the interested party when submitting the inquiry on the portal.</li>
            </ul>
            <ul v-else class="mt-3 space-y-3 list-none">
              <li><strong style="color: #0F1419">ImmobilienScout24:</strong> Anbieter ist Immobilien Scout GmbH, Invalidenstraße 65, 10557 Berlin, Deutschland. Die Verarbeitung erfolgt auf Grundlage der Einwilligung, die der Interessent bei der Anfrage auf dem Portal erteilt hat.</li>
              <li><strong style="color: #0F1419">willhaben:</strong> Anbieter ist willhaben internet service GmbH &amp; Co KG, Landstraßer Hauptstraße 97-101, 1030 Wien, Österreich. Die Verarbeitung erfolgt auf Grundlage der Einwilligung, die der Interessent bei der Anfrage auf dem Portal erteilt hat.</li>
            </ul>
            <p class="mt-3">
              {{ isEn ? 'Data transmitted through these portals typically includes: name, email address, phone number, message content, and information about the requested property.' : 'Die über diese Portale übermittelten Daten umfassen typischerweise: Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt sowie Informationen zum angefragten Objekt.' }}
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '9.2 Social Media Advertising Platforms' : '9.2 Social-Media-Werbeplattformen' }}
            </h3>
            <p>
              {{ isEn ? 'We also process inquiries generated through lead forms on social media platforms on behalf of our business clients:' : 'Wir verarbeiten im Auftrag unserer Geschäftskunden auch Anfragen, die über Lead-Formulare auf Social-Media-Plattformen generiert werden:' }}
            </p>
            <ul class="mt-3 space-y-3 list-none">
              <li v-if="isEn">
                <strong style="color: #0F1419">Meta (Facebook/Instagram) Lead Ads:</strong> Provider is Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland. Data processed: name, email address, phone number, and any additional information requested in the form. Legal basis is Art. 6(1)(a) GDPR (consent of the user when filling out the lead form).
              </li>
              <li v-else>
                <strong style="color: #0F1419">Meta (Facebook/Instagram) Lead Ads:</strong> Anbieter ist Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Verarbeitete Daten: Name, E-Mail-Adresse, Telefonnummer sowie ggf. weitere im Formular abgefragte Informationen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung des Nutzers beim Ausfüllen des Lead-Formulars).
              </li>
              <li v-if="isEn">
                <strong style="color: #0F1419">LinkedIn Lead Gen Forms:</strong> Provider is LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland. Data processed: name, email address, phone number, company, position, and any additional profile information. Legal basis is Art. 6(1)(a) GDPR (user consent).
              </li>
              <li v-else>
                <strong style="color: #0F1419">LinkedIn Lead Gen Forms:</strong> Anbieter ist LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland. Verarbeitete Daten: Name, E-Mail-Adresse, Telefonnummer, Unternehmen, Position sowie ggf. weitere Profilinformationen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung des Nutzers).
              </li>
            </ul>
          </div>

          <!-- 10 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '10. Advertising and Conversion Tracking' : '10. Werbung und Conversion-Tracking' }}
            </h2>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">
              {{ isEn ? '10.1 Google Ads and Conversion Tracking' : '10.1 Google Ads und Conversion-Tracking' }}
            </h3>
            <p v-if="isEn">
              We use Google Ads to draw attention to our services through advertisements on external websites. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.
            </p>
            <p v-else>
              Wir nutzen Google Ads, um mit Werbeanzeigen auf externen Websites auf unsere Angebote aufmerksam zu machen. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p v-if="isEn" class="mt-2">
              Google Ads also uses conversion tracking. When you click on an ad served by Google, a conversion tracking cookie is set. Additionally, conversion data (e.g., qualified leads) may be reported back to Google Ads to optimize advertising algorithms. This is done in pseudonymized form.
            </p>
            <p v-else class="mt-2">
              Im Rahmen von Google Ads wird auch das Conversion-Tracking eingesetzt. Wenn Sie auf eine von Google geschaltete Anzeige klicken, wird ein Cookie für das Conversion-Tracking gesetzt. Darüber hinaus können Conversion-Daten (z.B. qualifizierte Leads) an Google Ads zurückgemeldet werden, um die Werbealgorithmen zu optimieren. Dies erfolgt in pseudonymisierter Form.
            </p>
            <p class="mt-2">
              {{ isEn ? 'Legal basis is Art. 6(1)(a) GDPR (consent via the cookie banner). Google is certified under the EU-US Data Privacy Framework.' : 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über das Cookie-Banner). Google ist unter dem EU-US Data Privacy Framework zertifiziert.' }}
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">10.2 Meta Pixel (Facebook/Instagram)</h3>
            <p v-if="isEn">
              We use the Meta Pixel (formerly Facebook Pixel). The provider is Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.
            </p>
            <p v-else>
              Wir setzen das Meta Pixel (ehemals Facebook Pixel) ein. Anbieter ist Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
            </p>
            <p v-if="isEn" class="mt-2">
              The Meta Pixel enables tracking user behavior after they were redirected to our website by clicking on a Facebook or Instagram ad. We also use the Meta Conversions API to transmit conversion events server-side to Meta. Transmission is done in hashed form.
            </p>
            <p v-else class="mt-2">
              Das Meta Pixel ermöglicht es, das Verhalten von Nutzern nachzuverfolgen, nachdem diese durch Klick auf eine Facebook- oder Instagram-Werbeanzeige auf unsere Website weitergeleitet wurden. Zusätzlich nutzen wir die Meta Conversions API, um Conversion-Events serverseitig an Meta zu übermitteln. Die Übermittlung erfolgt in gehashter Form.
            </p>
            <p class="mt-2">
              {{ isEn ? 'Legal basis is Art. 6(1)(a) GDPR (consent via the cookie banner) and Art. 6(1)(f) GDPR (legitimate interest in optimizing advertising campaigns). Meta is certified under the EU-US Data Privacy Framework.' : 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über das Cookie-Banner) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Optimierung von Werbekampagnen). Meta ist unter dem EU-US Data Privacy Framework zertifiziert.' }}
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #0F1419">10.3 LinkedIn Insight Tag</h3>
            <p v-if="isEn">
              We use the LinkedIn Insight Tag on our website. The provider is LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland.
            </p>
            <p v-else>
              Wir verwenden auf unserer Website den LinkedIn Insight Tag. Anbieter ist LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland.
            </p>
            <p v-if="isEn" class="mt-2">
              The LinkedIn Insight Tag enables the collection of data about visits to our website, including URL, referrer URL, IP address, device and browser properties, and timestamps. This data is used for conversion tracking and retargeting.
            </p>
            <p v-else class="mt-2">
              Der LinkedIn Insight Tag ermöglicht das Sammeln von Daten zu den Besuchen auf unserer Website, einschließlich URL, Referrer-URL, IP-Adresse, Geräte- und Browsereigenschaften sowie Zeitstempel. Diese Daten werden für Conversion-Tracking und Retargeting genutzt.
            </p>
            <p class="mt-2">
              {{ isEn ? 'Legal basis is Art. 6(1)(a) GDPR (consent via the cookie banner). LinkedIn is certified under the EU-US Data Privacy Framework.' : 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über das Cookie-Banner). LinkedIn ist unter dem EU-US Data Privacy Framework zertifiziert.' }}
            </p>
          </div>

          <!-- 11 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '11. Social Media Presence' : '11. Social Media Präsenzen' }}
            </h2>
            <p>
              {{ isEn ? 'We maintain online presences on the following social networks:' : 'Wir unterhalten Onlinepräsenzen auf den folgenden sozialen Netzwerken:' }}
            </p>
            <ul class="mt-3 space-y-2 list-none">
              <li><strong style="color: #0F1419">Facebook:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, {{ isEn ? 'Ireland' : 'Irland' }}.</li>
              <li><strong style="color: #0F1419">Instagram:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, {{ isEn ? 'Ireland' : 'Irland' }}.</li>
              <li><strong style="color: #0F1419">LinkedIn:</strong> LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, {{ isEn ? 'Ireland' : 'Irland' }}.</li>
            </ul>
            <p class="mt-3">
              {{ isEn ? 'When you visit our social media pages, data about your usage behavior is collected by the respective provider. We have no influence on the data processed by the networks.' : 'Wenn Sie unsere Social-Media-Seiten besuchen, werden durch den jeweiligen Anbieter Daten über Ihr Nutzungsverhalten erhoben. Wir haben keinen Einfluss auf die durch die Netzwerke verarbeiteten Daten.' }}
            </p>
            <p class="mt-2">
              {{ isEn ? 'For Facebook and Instagram, there is joint controllership pursuant to Art. 26 GDPR for the processing of Insights data.' : 'Bei Facebook und Instagram besteht eine gemeinsame Verantwortlichkeit gemäß Art. 26 DSGVO für die Verarbeitung von Insights-Daten.' }}
            </p>
          </div>

          <!-- 12 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '12. Payment Processing' : '12. Zahlungsabwicklung' }}
            </h2>
            <h3 class="font-semibold mt-4 mb-2" style="color: #0F1419">12.1 Stripe</h3>
            <p v-if="isEn">
              We use Stripe for payment processing. The provider is Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Ireland.
            </p>
            <p v-else>
              Für die Zahlungsabwicklung nutzen wir den Dienst Stripe. Anbieter ist Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland.
            </p>
            <p v-if="isEn" class="mt-2">
              During payment transactions, the following data is transmitted to Stripe: payment amount, payment method information, name and email address, and billing address if applicable.
            </p>
            <p v-else class="mt-2">
              Bei Zahlungsvorgängen werden folgende Daten an Stripe übermittelt: Zahlungsbetrag, Zahlungsmittelinformationen, Name und E-Mail-Adresse sowie ggf. Rechnungsadresse.
            </p>
            <p class="mt-2">
              {{ isEn ? 'Legal basis is Art. 6(1)(b) GDPR (contract performance). Stripe is certified under the EU-US Data Privacy Framework.' : 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Stripe ist unter dem EU-US Data Privacy Framework zertifiziert.' }}
            </p>
          </div>

          <!-- 13 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '13. Local Fonts' : '13. Lokale Schriftarten' }}
            </h2>
            <p v-if="isEn">
              This website uses locally hosted fonts. No connection to external servers (such as Google Fonts) is made. The fonts are loaded directly from our server, which means your IP address is not transmitted to third parties.
            </p>
            <p v-else>
              Diese Website verwendet lokal eingebundene Schriftarten. Es findet keine Verbindung zu externen Servern (wie z.B. Google Fonts) statt. Die Schriftarten werden direkt von unserem Server geladen, wodurch keine Übermittlung Ihrer IP-Adresse an Dritte erfolgt.
            </p>
          </div>

          <!-- 14 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '14. Affiliate Programs' : '14. Affiliate-Programme' }}
            </h2>
            <p v-if="isEn">
              Our website may contain affiliate links to third-party products or services, particularly to Voicery and related services. When you click on an affiliate link, a cookie is set to enable the attribution of sales.
            </p>
            <p v-else>
              Auf unserer Website können Affiliate-Links zu Produkten oder Diensten Dritter enthalten sein, insbesondere zu Voicery und verwandten Diensten. Wenn Sie auf einen Affiliate-Link klicken, wird ein Cookie gesetzt, um die Zuordnung von Verkäufen zu ermöglichen.
            </p>
            <p class="mt-2">
              {{ isEn ? 'Legal basis is Art. 6(1)(a) GDPR (consent via the cookie banner) and Art. 6(1)(f) GDPR (legitimate interest in monetizing our content).' : 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über das Cookie-Banner) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Monetarisierung unserer Inhalte).' }}
            </p>
          </div>

          <!-- 15 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '15. Data Security' : '15. Datensicherheit' }}
            </h2>
            <p v-if="isEn">
              We implement technical and organizational security measures to protect your data against manipulation, loss, destruction, or unauthorized access. Our security measures are continuously improved in line with technological developments.
            </p>
            <p v-else>
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
            <p v-if="isEn" class="mt-2">
              Our measures include: encryption of data transmission via SSL/TLS, access restrictions to personal data, regular security updates of our systems, and pseudonymization and anonymization of data where possible.
            </p>
            <p v-else class="mt-2">
              Zu unseren Maßnahmen gehören insbesondere: Verschlüsselung der Datenübertragung mittels SSL/TLS, Zugangsbeschränkungen zu personenbezogenen Daten, regelmäßige Sicherheitsupdates unserer Systeme sowie Pseudonymisierung und Anonymisierung von Daten, wo möglich.
            </p>
          </div>

          <!-- 16 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '16. Data Transfer to Third Countries' : '16. Datenübermittlung in Drittländer' }}
            </h2>
            <p v-if="isEn">
              Some of the services we use are based in the USA or other third countries. The transfer of personal data to these countries is based on:
            </p>
            <p v-else>
              Einige der von uns genutzten Dienste haben ihren Sitz in den USA oder anderen Drittländern. Die Übermittlung personenbezogener Daten in diese Länder erfolgt auf Grundlage von:
            </p>
            <ul v-if="isEn" class="mt-3 space-y-2 list-none">
              <li><strong style="color: #0F1419">EU Commission Adequacy Decisions (Art. 45 GDPR):</strong> In particular, the EU-US Data Privacy Framework for US companies. This applies to: Google, Meta, LinkedIn, HubSpot, Stripe, and GoDaddy.</li>
              <li><strong style="color: #0F1419">EU Commission Standard Contractual Clauses (Art. 46(2)(c) GDPR):</strong> Where no adequacy decision exists.</li>
            </ul>
            <ul v-else class="mt-3 space-y-2 list-none">
              <li><strong style="color: #0F1419">Angemessenheitsbeschlüssen der EU-Kommission (Art. 45 DSGVO):</strong> Insbesondere dem EU-US Data Privacy Framework für US-Unternehmen. Dies betrifft: Google, Meta, LinkedIn, HubSpot, Stripe und GoDaddy.</li>
              <li><strong style="color: #0F1419">Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO):</strong> Soweit kein Angemessenheitsbeschluss vorliegt.</li>
            </ul>
          </div>

          <!-- 17 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '17. Retention Period' : '17. Speicherdauer' }}
            </h2>
            <p>
              {{ isEn ? 'We store personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by statutory retention periods.' : 'Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung der Zwecke, für die sie erhoben wurden, erforderlich ist oder wie es die gesetzlich vorgesehenen Speicher- und Aufbewahrungsfristen vorsehen.' }}
            </p>
            <ul v-if="isEn" class="mt-3 space-y-2 list-none">
              <li><strong style="color: #0F1419">Contract data:</strong> For the duration of the business relationship and beyond in accordance with statutory retention periods.</li>
              <li><strong style="color: #0F1419">Lead data:</strong> In accordance with the agreement with our business clients, typically until the processing purpose is achieved or until withdrawal.</li>
              <li><strong style="color: #0F1419">Voice recordings:</strong> After completion of processing and qualification, unless longer retention is required.</li>
              <li><strong style="color: #0F1419">Statutory retention periods:</strong> 7 years for business documents pursuant to § 212 UGB (Austrian Commercial Code) and 7 years for tax-relevant documents pursuant to § 132 BAO (Austrian Federal Fiscal Code).</li>
            </ul>
            <ul v-else class="mt-3 space-y-2 list-none">
              <li><strong style="color: #0F1419">Vertragsdaten:</strong> Für die Dauer der Geschäftsbeziehung und darüber hinaus gemäß den gesetzlichen Aufbewahrungsfristen.</li>
              <li><strong style="color: #0F1419">Lead-Daten:</strong> Entsprechend der Vereinbarung mit unseren Geschäftskunden, in der Regel bis zur Erreichung des Verarbeitungszwecks oder bis zum Widerruf.</li>
              <li><strong style="color: #0F1419">Sprachaufnahmen:</strong> Nach Abschluss der Verarbeitung und Qualifizierung, sofern keine längere Speicherung erforderlich ist.</li>
              <li><strong style="color: #0F1419">Gesetzliche Aufbewahrungsfristen:</strong> 7 Jahre für Geschäftsunterlagen gemäß § 212 UGB sowie 7 Jahre für steuerrechtlich relevante Unterlagen gemäß § 132 BAO.</li>
            </ul>
          </div>

          <!-- 18 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '18. Data Processing on Behalf' : '18. Auftragsverarbeitung' }}
            </h2>
            <p v-if="isEn">
              Insofar as we process personal data on behalf of our business clients, we act as a data processor within the meaning of Art. 28 GDPR. In these cases, we conclude data processing agreements with our business clients that govern the data protection obligations.
            </p>
            <p v-else>
              Soweit wir im Auftrag unserer Geschäftskunden personenbezogene Daten verarbeiten, handeln wir als Auftragsverarbeiter im Sinne von Art. 28 DSGVO. In diesen Fällen schließen wir mit unseren Geschäftskunden entsprechende Auftragsverarbeitungsverträge ab, die die datenschutzrechtlichen Pflichten regeln.
            </p>
            <p class="mt-2">
              {{ isEn ? 'In these cases, the business clients remain the data controllers within the meaning of the GDPR for the data of their end customers and prospects.' : 'Die Geschäftskunden bleiben in diesen Fällen Verantwortliche im Sinne der DSGVO für die Daten ihrer Endkunden und Interessenten.' }}
            </p>
          </div>

          <!-- 19 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '19. Automated Decision-Making' : '19. Automatisierte Entscheidungsfindung' }}
            </h2>
            <p v-if="isEn">
              As part of our lead qualification process, data is processed by AI systems and qualification results are generated. This automated processing serves the pre-qualification of inquiries and has no direct legal effects on the data subjects.
            </p>
            <p v-else>
              Im Rahmen unserer Lead-Qualifizierung werden Daten durch KI-Systeme verarbeitet und Qualifizierungsergebnisse erstellt. Diese automatisierte Verarbeitung dient der Vorqualifizierung von Anfragen und hat keine unmittelbaren rechtlichen Auswirkungen auf die betroffenen Personen.
            </p>
            <p class="mt-2">
              {{ isEn ? 'The final decision on further processing of an inquiry lies with our business clients and their employees.' : 'Die endgültige Entscheidung über die weitere Bearbeitung einer Anfrage liegt bei unseren Geschäftskunden und deren Mitarbeitern.' }}
            </p>
          </div>

          <!-- 20 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '20. Changes to This Privacy Policy' : '20. Änderungen dieser Datenschutzerklärung' }}
            </h2>
            <p v-if="isEn">
              We reserve the right to update this privacy policy to reflect changes in the legal situation or changes to our services. The current version is always available on our website.
            </p>
            <p v-else>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Dienste anzupassen. Die jeweils aktuelle Version ist auf unserer Website verfügbar.
            </p>
          </div>

          <!-- 21 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '21. Contact for Data Protection Inquiries' : '21. Kontakt für Datenschutzanfragen' }}
            </h2>
            <p>
              {{ isEn ? 'For questions about data protection or to exercise your rights, please contact:' : 'Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:' }}
            </p>
            <p class="mt-3">
              Doblyx AI GmbH<br />
              {{ isEn ? 'Attn.' : 'z.Hd.' }} Eric Dobler<br />
              Schildbach 42<br />
              8230 Hartberg<br />
              {{ isEn ? 'Austria' : 'Österreich' }}<br />
              {{ isEn ? 'Email' : 'E-Mail' }}: office@doblyx.com<br />
              {{ isEn ? 'Phone' : 'Telefon' }}: +43 676 5800866
            </p>
          </div>

        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>
