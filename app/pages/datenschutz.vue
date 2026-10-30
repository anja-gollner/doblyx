<script setup lang="ts">
// Seite ist aktuell nur auf Deutsch verfügbar
const isEn = ref(false)

useHead({
  title: computed(() => isEn.value ? 'Privacy Policy | Doblyx AI' : 'Datenschutzerklärung | Doblyx AI'),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <div>
    <Navbar />

    <section class="starfield relative overflow-hidden px-6 pb-24 pt-40">
      <HorizonGlow tone="mix" />
      <div class="relative z-[1] mx-auto max-w-3xl">
        <h1 class="mb-4 font-serif text-display-md font-normal" style="color: #F3F5F7">
          {{ isEn ? 'Privacy Policy' : 'Datenschutzerklärung' }}
        </h1>
        <p class="mb-12 text-sm" style="color: #8C969F">
          {{ isEn ? 'Last updated: January 2025' : 'Stand: Oktober 2026' }}
        </p>

        <div class="space-y-10 text-[15px] leading-relaxed" style="color: rgba(243, 245, 247, 0.72)">

          <!-- 1 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
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
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
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
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? '3. Your Rights as a Data Subject' : '3. Ihre Rechte als betroffene Person' }}
            </h2>
            <p class="mb-4">
              {{ isEn ? 'You have the following rights regarding your personal data processed by us:' : 'Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:' }}
            </p>
            <ul v-if="isEn" class="space-y-3 list-none">
              <li><strong style="color: #F3F5F7">Right of Access (Art. 15 GDPR):</strong> You may request information about your personal data processed by us.</li>
              <li><strong style="color: #F3F5F7">Right to Rectification (Art. 16 GDPR):</strong> You may request the correction of inaccurate or the completion of incomplete personal data stored by us.</li>
              <li><strong style="color: #F3F5F7">Right to Erasure (Art. 17 GDPR):</strong> You may request the deletion of your personal data stored by us, unless processing is required for exercising the right of freedom of expression, for compliance with a legal obligation, for reasons of public interest, or for the establishment, exercise, or defense of legal claims.</li>
              <li><strong style="color: #F3F5F7">Right to Restriction of Processing (Art. 18 GDPR):</strong> You may request the restriction of processing of your personal data.</li>
              <li><strong style="color: #F3F5F7">Right to Data Portability (Art. 20 GDPR):</strong> You may request to receive your personal data in a structured, commonly used, and machine-readable format or to have it transmitted to another controller.</li>
              <li><strong style="color: #F3F5F7">Right to Object (Art. 21 GDPR):</strong> You may object to the processing of your personal data at any time if the processing is based on Art. 6(1)(e) or (f) GDPR.</li>
              <li><strong style="color: #F3F5F7">Right to Withdraw Consent (Art. 7(3) GDPR):</strong> You may withdraw your consent at any time. The lawfulness of processing carried out on the basis of consent before its withdrawal is not affected.</li>
            </ul>
            <ul v-else class="space-y-3 list-none">
              <li><strong style="color: #F3F5F7">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
              <li><strong style="color: #F3F5F7">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
              <li><strong style="color: #F3F5F7">Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</li>
              <li><strong style="color: #F3F5F7">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
              <li><strong style="color: #F3F5F7">Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen verlangen.</li>
              <li><strong style="color: #F3F5F7">Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einlegen, wenn die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt.</li>
              <li><strong style="color: #F3F5F7">Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können Ihre einmal erteilte Einwilligung jederzeit gegenüber uns widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung wird dadurch nicht berührt.</li>
            </ul>
            <div class="mt-4 p-5 rounded-xl" style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08)">
              <p v-if="isEn">
                <strong style="color: #F3F5F7">Right to Lodge a Complaint with a Supervisory Authority (Art. 77 GDPR):</strong><br />
                Austrian Data Protection Authority<br />
                Barichgasse 40-42, 1030 Vienna, Austria<br />
                Email: dsb@dsb.gv.at<br />
                Website: www.dsb.gv.at
              </p>
              <p v-else>
                <strong style="color: #F3F5F7">Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong><br />
                Österreichische Datenschutzbehörde<br />
                Barichgasse 40-42, 1030 Wien<br />
                E-Mail: dsb@dsb.gv.at<br />
                Website: www.dsb.gv.at
              </p>
            </div>
          </div>

          <!-- 4 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              4. Hosting
            </h2>

            <h3 class="font-semibold mt-6 mb-2" style="color: #F3F5F7">
              4.1 Website-Hosting (Vercel)
            </h3>
            <p>
              Unsere Website wird bei Vercel gehostet und über deren Netzwerk ausgeliefert. Anbieter ist Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Unsere Domain ist bei GoDaddy registriert; GoDaddy verarbeitet dabei keine Daten der Website-Besucher.
            </p>
            <p class="mt-2">
              Bei Aufruf unserer Website werden automatisch folgende Daten (Server-Logfiles) erfasst: IP-Adresse des anfragenden Geräts, Datum und Uhrzeit der Anfrage, aufgerufene Seite, Zugriffsstatus/HTTP-Statuscode, übertragene Datenmenge, Referrer-URL, verwendeter Browser und Betriebssystem. Diese Daten werden zur Auslieferung und Absicherung der Website benötigt und nach kurzer Zeit gelöscht.
            </p>
            <p class="mt-2">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der technischen Bereitstellung und Sicherheit unserer Website. Mit Vercel besteht ein Auftragsverarbeitungsvertrag; die Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework bzw. der Standardvertragsklauseln der EU-Kommission.
            </p>
          </div>

          <!-- 5 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
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
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
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

            <h3 class="font-semibold mt-6 mb-2" style="color: #F3F5F7">
              6.1 Kontaktformular auf dieser Website
            </h3>
            <p>
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir Ihre Angaben aus dem Formular (Name, E-Mail-Adresse, optional Unternehmen und Telefonnummer, Ihre Nachricht sowie die Angabe, ob Sie sich für das Gründungskunden-Programm interessieren), um Ihre Anfrage zu bearbeiten und Ihnen einen Termin für den Potenzial-Check vorzuschlagen.
            </p>
            <p class="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Ihre Anfrage hin) sowie Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an der Beantwortung von Anfragen). Die Angabe von Name, E-Mail-Adresse und Nachricht ist erforderlich, damit wir Ihre Anfrage bearbeiten können; alle weiteren Angaben sind freiwillig.
            </p>
            <p class="mt-2">
              Für den technischen Versand der Formularinhalte an unser Postfach nutzen wir den E-Mail-Dienst Resend (Anbieter: Resend, Inc., USA). Dabei werden die Formularinhalte an Server von Resend übermittelt und von dort an uns zugestellt. Resend verarbeitet die Daten ausschließlich in unserem Auftrag. Die Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework, sofern der Anbieter zertifiziert ist, andernfalls auf Grundlage der Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).
            </p>
            <p class="mt-2">
              Ihre Anfrage speichern wir so lange, wie es für die Bearbeitung und eine mögliche Zusammenarbeit erforderlich ist. Kommt keine Zusammenarbeit zustande, löschen wir Ihre Daten spätestens nach 12 Monaten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <!-- 7 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              7. Cookies und Webanalyse
            </h2>

            <h3 class="font-semibold mt-6 mb-2" style="color: #F3F5F7">
              7.1 Keine Cookies auf dieser Website
            </h3>
            <p>
              Diese Website setzt keine Cookies und speichert keine Informationen auf Ihrem Endgerät, die nicht für die Darstellung der Seite technisch erforderlich sind. Es gibt daher auch kein Cookie-Banner. Schriftarten werden lokal von unserem Server geladen (siehe Abschnitt „Lokale Schriftarten“).
            </p>

            <h3 class="font-semibold mt-6 mb-2" style="color: #F3F5F7">
              7.2 Webanalyse mit Umami (ohne Cookies)
            </h3>
            <p>
              Um zu verstehen, wie unsere Website genutzt wird, und sie zu verbessern, verwenden wir den Analysedienst Umami (Anbieter: Umami Software, Inc., USA). Umami setzt keine Cookies und speichert keine Informationen auf Ihrem Endgerät. Es werden keine Nutzerprofile erstellt und Sie werden nicht über verschiedene Websites hinweg verfolgt.
            </p>
            <p class="mt-2">
              Erfasst werden ausschließlich zusammengefasste, nicht personenbezogene Nutzungsdaten: aufgerufene Seiten, verweisende Website (z. B. LinkedIn oder eine Suchmaschine), Land, Gerätetyp, Browser und Betriebssystem sowie Klicks auf zentrale Elemente (z. B. „Gratis Check“, Telefonnummer, E-Mail-Adresse, abgeschickte Anfrage). Ihre IP-Adresse wird nicht gespeichert; sie wird nur kurzzeitig und in nicht rückverfolgbarer Form verarbeitet, um Besuche zu zählen.
            </p>
            <p class="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der statistischen Auswertung und Verbesserung unseres Webangebots. Da keine Cookies oder vergleichbare Technologien auf Ihrem Endgerät eingesetzt werden, ist keine Einwilligung erforderlich. Soweit Daten in die USA übermittelt werden, erfolgt dies auf Grundlage des EU-US Data Privacy Framework, sofern der Anbieter zertifiziert ist, andernfalls auf Grundlage der Standardvertragsklauseln der EU-Kommission.
            </p>
          </div>

          <!-- 8 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? '8. Social Media Presence' : '8. Social Media Präsenzen' }}
            </h2>
            <p>
              {{ isEn ? 'We maintain online presences on the following social networks:' : 'Wir unterhalten Onlinepräsenzen auf den folgenden sozialen Netzwerken:' }}
            </p>
            <ul class="mt-3 space-y-2 list-none">
              <li><strong style="color: #F3F5F7">Facebook:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, {{ isEn ? 'Ireland' : 'Irland' }}.</li>
              <li><strong style="color: #F3F5F7">Instagram:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, {{ isEn ? 'Ireland' : 'Irland' }}.</li>
              <li><strong style="color: #F3F5F7">LinkedIn:</strong> LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, {{ isEn ? 'Ireland' : 'Irland' }}.</li>
            </ul>
            <p class="mt-3">
              {{ isEn ? 'When you visit our social media pages, data about your usage behavior is collected by the respective provider. We have no influence on the data processed by the networks.' : 'Wenn Sie unsere Social-Media-Seiten besuchen, werden durch den jeweiligen Anbieter Daten über Ihr Nutzungsverhalten erhoben. Wir haben keinen Einfluss auf die durch die Netzwerke verarbeiteten Daten.' }}
            </p>
            <p class="mt-2">
              {{ isEn ? 'For Facebook and Instagram, there is joint controllership pursuant to Art. 26 GDPR for the processing of Insights data.' : 'Bei Facebook und Instagram besteht eine gemeinsame Verantwortlichkeit gemäß Art. 26 DSGVO für die Verarbeitung von Insights-Daten.' }}
            </p>
          </div>

          <!-- 9 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? '9. Local Fonts' : '9. Lokale Schriftarten' }}
            </h2>
            <p v-if="isEn">
              This website uses locally hosted fonts. No connection to external servers (such as Google Fonts) is made. The fonts are loaded directly from our server, which means your IP address is not transmitted to third parties.
            </p>
            <p v-else>
              Diese Website verwendet lokal eingebundene Schriftarten. Es findet keine Verbindung zu externen Servern (wie z.B. Google Fonts) statt. Die Schriftarten werden direkt von unserem Server geladen, wodurch keine Übermittlung Ihrer IP-Adresse an Dritte erfolgt.
            </p>
          </div>

          <!-- 10 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? '10. Data Security' : '10. Datensicherheit' }}
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

          <!-- 11 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? '11. Data Transfer to Third Countries' : '11. Datenübermittlung in Drittländer' }}
            </h2>
            <p v-if="isEn">
              Some of the services we use are based in the USA or other third countries. The transfer of personal data to these countries is based on:
            </p>
            <p v-else>
              Einige der von uns genutzten Dienste haben ihren Sitz in den USA oder anderen Drittländern. Die Übermittlung personenbezogener Daten in diese Länder erfolgt auf Grundlage von:
            </p>
            <ul v-if="isEn" class="mt-3 space-y-2 list-none">
              <li><strong style="color: #F3F5F7">EU Commission Adequacy Decisions (Art. 45 GDPR):</strong> In particular, the EU-US Data Privacy Framework for US companies. This applies to: Vercel, Resend and Umami.</li>
              <li><strong style="color: #F3F5F7">EU Commission Standard Contractual Clauses (Art. 46(2)(c) GDPR):</strong> Where no adequacy decision exists.</li>
            </ul>
            <ul v-else class="mt-3 space-y-2 list-none">
              <li><strong style="color: #F3F5F7">Angemessenheitsbeschlüssen der EU-Kommission (Art. 45 DSGVO):</strong> Insbesondere dem EU-US Data Privacy Framework für US-Unternehmen. Dies betrifft: Vercel (Hosting), Resend (Versand des Kontaktformulars) und Umami (Webanalyse).</li>
              <li><strong style="color: #F3F5F7">Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO):</strong> Soweit kein Angemessenheitsbeschluss vorliegt.</li>
            </ul>
          </div>

          <!-- 12 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? '12. Retention Period' : '12. Speicherdauer' }}
            </h2>
            <p>
              {{ isEn ? 'We store personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by statutory retention periods.' : 'Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung der Zwecke, für die sie erhoben wurden, erforderlich ist oder wie es die gesetzlich vorgesehenen Speicher- und Aufbewahrungsfristen vorsehen.' }}
            </p>
            <ul v-if="isEn" class="mt-3 space-y-2 list-none">
              <li><strong style="color: #F3F5F7">Contract data:</strong> For the duration of the business relationship and beyond in accordance with statutory retention periods.</li>
              <li><strong style="color: #F3F5F7">Statutory retention periods:</strong> 7 years for business documents pursuant to § 212 UGB (Austrian Commercial Code) and 7 years for tax-relevant documents pursuant to § 132 BAO (Austrian Federal Fiscal Code).</li>
            </ul>
            <ul v-else class="mt-3 space-y-2 list-none">
              <li><strong style="color: #F3F5F7">Anfragen über das Kontaktformular:</strong> Bis zu 12 Monate, sofern keine Zusammenarbeit zustande kommt (siehe Abschnitt 6.1).</li>
              <li><strong style="color: #F3F5F7">Vertragsdaten:</strong> Für die Dauer der Geschäftsbeziehung und darüber hinaus gemäß den gesetzlichen Aufbewahrungsfristen.</li>
              <li><strong style="color: #F3F5F7">Gesetzliche Aufbewahrungsfristen:</strong> 7 Jahre für Geschäftsunterlagen gemäß § 212 UGB sowie 7 Jahre für steuerrechtlich relevante Unterlagen gemäß § 132 BAO.</li>
            </ul>
          </div>

          <!-- 13 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? '13. Changes to This Privacy Policy' : '13. Änderungen dieser Datenschutzerklärung' }}
            </h2>
            <p v-if="isEn">
              We reserve the right to update this privacy policy to reflect changes in the legal situation or changes to our services. The current version is always available on our website.
            </p>
            <p v-else>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Dienste anzupassen. Die jeweils aktuelle Version ist auf unserer Website verfügbar.
            </p>
          </div>

          <!-- 14 -->
          <div>
            <h2 class="mb-3 font-serif text-[1.6rem] font-normal leading-tight" style="color: #F3F5F7">
              {{ isEn ? '14. Contact for Data Protection Inquiries' : '14. Kontakt für Datenschutzanfragen' }}
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
