<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

useHead({
  title: computed(() => isEn.value ? 'Terms & Conditions — Doblyx AI' : 'AGB — Doblyx AI'),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <div>
    <Navbar />

    <section class="pt-40 pb-24 px-6" style="background: #FAFAFA">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-4 tracking-tight" style="color: #0F1419">
          {{ isEn ? 'General Terms and Conditions' : 'Allgemeine Geschäftsbedingungen (AGB)' }}
        </h1>
        <p class="mb-12 text-sm" style="color: #999">
          {{ isEn ? 'Last updated: January 2026' : 'Stand: Januar 2026' }}
        </p>

        <div class="space-y-10 text-[15px] leading-relaxed" style="color: #555">

          <!-- § 1 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 1 Scope of Application and Contracting Party' : '§ 1 Geltungsbereich und Vertragspartner' }}
            </h2>
            <p v-if="isEn">
              (1) These General Terms and Conditions (hereinafter "GTC") apply to all contracts between Doblyx AI GmbH, Schildbach 42, 8230 Hartberg, Austria (hereinafter "Provider") and the Client for the provision of services in the area of AI-powered automation, lead qualification, and workflow optimization.
            </p>
            <p v-else>(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen der Doblyx AI GmbH, Schildbach 42, 8230 Hartberg, Österreich (nachfolgend „Anbieter") und dem Kunden über die Erbringung von Dienstleistungen im Bereich KI-gestützter Automatisierung, Lead-Qualifizierung und Workflow-Optimierung.</p>
            <p v-if="isEn" class="mt-3">
              (2) The Provider's services are exclusively directed at entrepreneurs within the meaning of § 1 KSchG (Austrian Consumer Protection Act) or § 14 BGB (German Civil Code). An entrepreneur is a natural or legal person or a partnership with legal capacity that acts in the exercise of its commercial or independent professional activity when concluding a legal transaction. The Client confirms by entering into the contract that they are an entrepreneur.
            </p>
            <p v-else class="mt-3">(2) Die Leistungen des Anbieters richten sich ausschließlich an Unternehmer im Sinne des § 1 KSchG bzw. § 14 BGB. Unternehmer ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt. Der Kunde bestätigt mit Vertragsschluss, dass er Unternehmer ist.</p>
            <p v-if="isEn" class="mt-3">
              (3) Deviating, conflicting, or supplementary general terms and conditions of the Client shall only become part of the contract if and to the extent that the Provider has expressly agreed to their applicability in writing.
            </p>
            <p v-else class="mt-3">(3) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur dann und insoweit Vertragsbestandteil, als der Anbieter ihrer Geltung ausdrücklich schriftlich zugestimmt hat.</p>
            <p v-if="isEn" class="mt-3">
              (4) Individual agreements made with the Client in specific cases (including side agreements, supplements, and amendments) shall in all cases take precedence over these GTC. A written contract or written confirmation by the Provider shall be authoritative for the content of such agreements.
            </p>
            <p v-else class="mt-3">(4) Im Einzelfall getroffene, individuelle Vereinbarungen mit dem Kunden (einschließlich Nebenabreden, Ergänzungen und Änderungen) haben in jedem Fall Vorrang vor diesen AGB. Für den Inhalt derartiger Vereinbarungen ist ein schriftlicher Vertrag bzw. eine schriftliche Bestätigung des Anbieters maßgebend.</p>
          </div>

          <!-- § 2 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 2 Subject Matter and Service Description' : '§ 2 Vertragsgegenstand und Leistungsbeschreibung' }}
            </h2>
            <p v-if="isEn">
              (1) The Provider renders services in the area of AI-powered business process automation. The specific scope of services is defined in the respective offer or service description of the chosen package.
            </p>
            <p v-else>(1) Der Anbieter erbringt Dienstleistungen im Bereich der KI-gestützten Geschäftsprozessautomatisierung. Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. der Leistungsbeschreibung des gewählten Pakets.</p>
            <p class="mt-3">{{ isEn ? '(2) Services may include in particular:' : '(2) Die Leistungen können insbesondere umfassen:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Setup and configuration of AI-powered phone assistants (Voicery) for automated lead qualification</li>
              <li>b) Creation and implementation of workflow automations using n8n</li>
              <li>c) Integration of CRM systems (e.g., HubSpot), spreadsheets (Google Sheets), and reporting tools (Looker)</li>
              <li>d) Connection to advertising platforms (Facebook/Meta, Google Ads, LinkedIn) for lead capture and conversion optimization</li>
              <li>e) Connection to real estate portals (ImmobilienScout24, willhaben) and other lead sources</li>
              <li>f) Ongoing maintenance, optimization, and support of implemented systems</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Einrichtung und Konfiguration von KI-gestützten Telefon-Assistenten (Voicery) zur automatisierten Lead-Qualifizierung</li>
              <li>b) Erstellung und Implementierung von Workflow-Automatisierungen mittels n8n</li>
              <li>c) Integration von CRM-Systemen (z.B. HubSpot), Tabellenkalkulationen (Google Sheets) und Reporting-Tools (Looker)</li>
              <li>d) Anbindung an Werbeplattformen (Facebook/Meta, Google Ads, LinkedIn) zur Lead-Erfassung und Conversion-Optimierung</li>
              <li>e) Anbindung an Immobilienportale (ImmobilienScout24, willhaben) und sonstige Lead-Quellen</li>
              <li>f) Laufende Wartung, Optimierung und Support der implementierten Systeme</li>
            </ul>
            <p v-if="isEn" class="mt-3">
              (3) The Provider offers various service packages. Details on scope of services, included minutes, integrations, and pricing are set out in the current price list or individual offer.
            </p>
            <p v-else class="mt-3">(3) Der Anbieter bietet verschiedene Leistungspakete an. Die Details zu Leistungsumfang, inkludierten Minuten, Integrationen und Preisen ergeben sich aus der jeweils aktuellen Preisliste bzw. dem individuellen Angebot.</p>
            <p v-if="isEn" class="mt-3">
              (4) Unless otherwise agreed, standard packages include 300 minutes of monthly usage time for the AI phone assistant. Usage exceeding this allowance will be charged additionally at the per-minute rate specified in the offer.
            </p>
            <p v-else class="mt-3">(4) Sofern nicht anders vereinbart, sind in den Standardpaketen 300 Minuten monatliche Nutzungszeit für den KI-Telefon-Assistenten inkludiert. Bei Überschreitung dieser Minutenzahl wird die Mehrnutzung nach dem im Angebot festgelegten Minutenpreis zusätzlich berechnet.</p>
          </div>

          <!-- § 3 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 3 Contract Formation' : '§ 3 Vertragsschluss' }}
            </h2>
            <p>{{ isEn ? '(1) The presentation of services on the website or in presentations does not constitute a legally binding offer, but an invitation to submit an offer.' : '(1) Die Darstellung der Leistungen auf der Website oder in Präsentationen stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) The contract is concluded by:' : '(2) Der Vertrag kommt zustande durch:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Signing of a written contract by both parties, or</li>
              <li>b) Written order confirmation by the Provider after the Client has placed an order, or</li>
              <li>c) Acceptance of an offer prepared by the Provider by the Client within the offer period.</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Unterzeichnung eines schriftlichen Vertrags durch beide Parteien, oder</li>
              <li>b) schriftliche Auftragsbestätigung des Anbieters nach Auftragserteilung durch den Kunden, oder</li>
              <li>c) Annahme eines vom Anbieter erstellten Angebots durch den Kunden innerhalb der Angebotsfrist.</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(3) Offers by the Provider are valid for 14 days unless otherwise stated.' : '(3) Angebote des Anbieters sind, sofern nicht anders angegeben, 14 Tage gültig.' }}</p>
          </div>

          <!-- § 4 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 4 Compensation and Payment Terms' : '§ 4 Vergütung und Zahlungsbedingungen' }}
            </h2>
            <p>{{ isEn ? '(1) Compensation consists of:' : '(1) Die Vergütung setzt sich zusammen aus:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) A one-time setup fee for the setup and implementation of the systems</li>
              <li>b) A monthly retainer for maintenance, support, and ongoing optimization</li>
              <li>c) Additional costs if applicable for exceeding included usage minutes</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) einer einmaligen Setup-Gebühr für die Einrichtung und Implementierung der Systeme</li>
              <li>b) einem monatlichen Retainer für Wartung, Support und laufende Optimierung</li>
              <li>c) ggf. zusätzlichen Kosten bei Überschreitung der inkludierten Nutzungsminuten</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(2) All prices are in Euros and exclude statutory VAT.' : '(2) Alle Preise verstehen sich in Euro und zuzüglich der gesetzlichen Umsatzsteuer.' }}</p>
            <p class="mt-3">{{ isEn ? '(3) The setup fee is due as follows:' : '(3) Die Setup-Gebühr ist wie folgt fällig:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) 50% upon contract conclusion as a down payment</li>
              <li>b) 50% upon acceptance or go-live of the implemented solution</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) 50 % bei Vertragsschluss als Anzahlung</li>
              <li>b) 50 % bei Abnahme bzw. Go-Live der implementierten Lösung</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(4) The monthly retainer is due in advance at the beginning of each month. The first retainer payment is due together with the remaining setup fee upon acceptance.' : '(4) Der monatliche Retainer ist jeweils im Voraus zum Monatsbeginn fällig. Die erste Retainer-Zahlung ist zusammen mit der Restzahlung der Setup-Gebühr bei Abnahme fällig.' }}</p>
            <p class="mt-3">{{ isEn ? '(5) Invoices are due for payment immediately upon receipt without deduction.' : '(5) Rechnungen sind sofort nach Erhalt ohne Abzug zur Zahlung fällig.' }}</p>
            <p class="mt-3">{{ isEn ? '(6) In case of late payment, the Provider is entitled to charge default interest at a rate of 9.2 percentage points above the respective base interest rate. The right to claim higher damages for default is reserved.' : '(6) Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in Höhe von 9,2 Prozentpunkten über dem jeweiligen Basiszinssatz zu berechnen. Die Geltendmachung eines höheren Verzugsschadens bleibt vorbehalten.' }}</p>
            <p class="mt-3">{{ isEn ? '(7) The Client may only offset against undisputed or legally established claims. The Client may only exercise a right of retention insofar as it is based on claims from the same contractual relationship.' : '(7) Der Kunde kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen. Ein Zurückbehaltungsrecht kann der Kunde nur geltend machen, soweit es auf Ansprüchen aus demselben Vertragsverhältnis beruht.' }}</p>
          </div>

          <!-- § 5 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 5 Contract Term and Termination' : '§ 5 Vertragslaufzeit und Kündigung' }}
            </h2>
            <p>{{ isEn ? '(1) Unless a minimum term is agreed in the individual contract, either party may terminate the contract with 30 days\' notice to the end of the month.' : '(1) Sofern im individuellen Vertrag keine Mindestlaufzeit vereinbart ist, kann der Vertrag von beiden Parteien mit einer Frist von 30 Tagen zum Monatsende gekündigt werden.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) If a minimum term was agreed (e.g., 3 months), the contract is automatically renewed for one additional month after the minimum term expires, unless terminated with 30 days\' notice to the end of the minimum term or the respective renewal period.' : '(2) Wurde eine Mindestlaufzeit vereinbart (z.B. 3 Monate), verlängert sich der Vertrag nach Ablauf der Mindestlaufzeit automatisch um jeweils einen weiteren Monat, sofern er nicht mit einer Frist von 30 Tagen zum Ende der Mindestlaufzeit bzw. des jeweiligen Verlängerungszeitraums gekündigt wird.' }}</p>
            <p class="mt-3">{{ isEn ? '(3) The right to extraordinary termination for good cause remains unaffected. Good cause exists in particular when:' : '(3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) The Client is in arrears with payment of two consecutive monthly installments</li>
              <li>b) A party repeatedly violates material contractual obligations despite a formal warning</li>
              <li>c) Insolvency proceedings are opened against a party's assets or the opening is rejected for lack of assets</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) der Kunde mit der Zahlung von zwei aufeinanderfolgenden Monatsbeiträgen in Verzug gerät</li>
              <li>b) eine Partei wesentliche Vertragspflichten trotz Abmahnung wiederholt verletzt</li>
              <li>c) über das Vermögen einer Partei ein Insolvenzverfahren eröffnet oder die Eröffnung mangels Masse abgelehnt wird</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(4) Termination must be in writing (email is sufficient).' : '(4) Kündigungen bedürfen der Schriftform (E-Mail ausreichend).' }}</p>
            <p class="mt-3">{{ isEn ? '(5) Setup fees already paid will not be refunded upon termination. If termination occurs before go-live, the down payment (50% of the setup fee) will not be refunded, as it covers the planning and preparatory services provided up to that point.' : '(5) Bereits bezahlte Setup-Gebühren werden bei Kündigung nicht erstattet. Bei Kündigung vor Go-Live wird die geleistete Anzahlung (50 % der Setup-Gebühr) nicht erstattet, da diese die bis dahin erbrachten Planungs- und Vorbereitungsleistungen abdeckt.' }}</p>
          </div>

          <!-- § 6 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 6 Client\'s Cooperation Obligations' : '§ 6 Mitwirkungspflichten des Kunden' }}
            </h2>
            <p>{{ isEn ? '(1) The Client is obligated to support the Provider in the performance of the agreed services to a reasonable extent. In particular, the Client shall ensure that:' : '(1) Der Kunde ist verpflichtet, den Anbieter bei der Erbringung der vereinbarten Leistungen in angemessenem Umfang zu unterstützen. Der Kunde stellt insbesondere sicher, dass:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) All information, access credentials, and materials required for service delivery are provided in a timely and complete manner</li>
              <li>b) A competent contact person is available for queries</li>
              <li>c) Approvals and feedback are given within reasonable timeframes</li>
              <li>d) Necessary access to third-party systems (CRM, advertising platforms, etc.) is set up</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) alle für die Leistungserbringung erforderlichen Informationen, Zugangsdaten und Materialien rechtzeitig und vollständig bereitgestellt werden</li>
              <li>b) ein kompetenter Ansprechpartner für Rückfragen zur Verfügung steht</li>
              <li>c) Freigaben und Feedbacks innerhalb angemessener Fristen erteilt werden</li>
              <li>d) die notwendigen Zugänge zu Drittsystemen (CRM, Werbeplattformen, etc.) eingerichtet werden</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(2) The Client is responsible for ensuring that they have all necessary rights and permissions to use the automations implemented by the Provider. This includes in particular:' : '(2) Der Kunde ist dafür verantwortlich, dass er über alle erforderlichen Rechte und Genehmigungen verfügt, um die vom Anbieter implementierten Automatisierungen nutzen zu dürfen. Dies umfasst insbesondere:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Authorization for automated contact with leads</li>
              <li>b) Required data protection consents from data subjects</li>
              <li>c) Compliance with the terms of use of connected third-party platforms</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) die Berechtigung zur automatisierten Kontaktaufnahme mit Leads</li>
              <li>b) die erforderlichen datenschutzrechtlichen Einwilligungen der betroffenen Personen</li>
              <li>c) die Einhaltung der Nutzungsbedingungen der angebundenen Drittplattformen</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(3) The Client ensures that all leads processed through the implemented systems have been lawfully collected and that the necessary consents for contact have been obtained.' : '(3) Der Kunde stellt sicher, dass alle Leads, die über die implementierten Systeme verarbeitet werden, rechtmäßig erhoben wurden und dass die erforderlichen Einwilligungen zur Kontaktaufnahme vorliegen.' }}</p>
            <p class="mt-3">{{ isEn ? '(4) Delays attributable to a breach of the Client\'s cooperation obligations shall not be at the expense of the Provider. Agreed deadlines shall be postponed accordingly.' : '(4) Verzögerungen, die auf eine Verletzung der Mitwirkungspflichten des Kunden zurückzuführen sind, gehen nicht zu Lasten des Anbieters. Vereinbarte Termine verschieben sich entsprechend.' }}</p>
          </div>

          <!-- § 7 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 7 Service Delivery and Acceptance' : '§ 7 Leistungserbringung und Abnahme' }}
            </h2>
            <p>{{ isEn ? '(1) The Provider shall perform the agreed services with due care and using qualified personnel.' : '(1) Der Anbieter erbringt die vereinbarten Leistungen mit der gebotenen Sorgfalt und unter Einsatz von qualifiziertem Personal.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) Dates and deadlines are only binding if they have been expressly designated as binding. The Provider is entitled to have services performed by third parties (subcontractors).' : '(2) Termine und Fristen sind nur verbindlich, wenn sie ausdrücklich als verbindlich bezeichnet wurden. Der Anbieter ist berechtigt, Leistungen durch Dritte (Subunternehmer) erbringen zu lassen.' }}</p>
            <p class="mt-3">{{ isEn ? '(3) Upon completion of the setup phase, the Client will be requested to accept the services. The Client shall review and accept the services within 14 days of the request. Acceptance is deemed to have occurred when:' : '(3) Nach Fertigstellung der Setup-Phase wird der Kunde zur Abnahme aufgefordert. Der Kunde hat die Leistungen innerhalb von 14 Tagen nach Aufforderung zu prüfen und abzunehmen. Die Abnahme gilt als erfolgt, wenn:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) The Client expressly declares acceptance, or</li>
              <li>b) The Client uses the services productively, or</li>
              <li>c) The Client does not report material defects in writing within the 14-day period.</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) der Kunde die Abnahme ausdrücklich erklärt, oder</li>
              <li>b) der Kunde die Leistungen produktiv nutzt, oder</li>
              <li>c) der Kunde nicht innerhalb der 14-Tages-Frist wesentliche Mängel schriftlich rügt.</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(4) Immaterial defects do not entitle the Client to refuse acceptance.' : '(4) Unwesentliche Mängel berechtigen nicht zur Verweigerung der Abnahme.' }}</p>
          </div>

          <!-- § 8 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 8 Service Level and Support' : '§ 8 Service Level und Support' }}
            </h2>
            <p>{{ isEn ? '(1) The Provider provides support for the implemented systems as part of the monthly retainer.' : '(1) Der Anbieter stellt im Rahmen des monatlichen Retainers Support für die implementierten Systeme bereit.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) Support requests are answered on business days (Monday to Friday, excluding public holidays in Austria) within 24 hours. The response time begins when the request is received during business hours (9:00 AM – 5:00 PM CET).' : '(2) Support-Anfragen werden an Werktagen (Montag bis Freitag, ausgenommen gesetzliche Feiertage in Österreich) innerhalb von 24 Stunden beantwortet. Die Reaktionszeit beginnt mit Eingang der Anfrage während der Geschäftszeiten (9:00 – 17:00 Uhr MEZ).' }}</p>
            <p class="mt-3">{{ isEn ? '(3) Support includes:' : '(3) Der Support umfasst:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Answering questions about the use of the implemented systems</li>
              <li>b) Resolution of errors and disruptions</li>
              <li>c) Minor adjustments and optimizations within the agreed scope of services</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Beantwortung von Fragen zur Nutzung der implementierten Systeme</li>
              <li>b) Behebung von Fehlern und Störungen</li>
              <li>c) Kleinere Anpassungen und Optimierungen im Rahmen des vereinbarten Leistungsumfangs</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(4) Not covered by support:' : '(4) Nicht vom Support umfasst sind:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Major extensions or new features (these are offered separately)</li>
              <li>b) Disruptions caused by changes to third-party systems over which the Provider has no control</li>
              <li>c) Disruptions caused by improper use or interference by the Client</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Wesentliche Erweiterungen oder neue Features (diese werden separat angeboten)</li>
              <li>b) Störungen, die durch Änderungen an Drittsystemen verursacht werden, auf die der Anbieter keinen Einfluss hat</li>
              <li>c) Störungen, die durch unsachgemäße Nutzung oder Eingriffe des Kunden verursacht wurden</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(5) The Provider strives to ensure high availability of the systems. However, a specific availability is not guaranteed. Temporary outages, particularly due to maintenance work or disruptions at third-party providers (hosting, APIs), are possible.' : '(5) Der Anbieter ist bemüht, eine hohe Verfügbarkeit der Systeme zu gewährleisten. Eine bestimmte Verfügbarkeit wird jedoch nicht garantiert. Kurzfristige Ausfälle, insbesondere aufgrund von Wartungsarbeiten oder Störungen bei Drittanbietern (Hosting, APIs), sind möglich.' }}</p>
          </div>

          <!-- § 9 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 9 Usage Rights and Intellectual Property' : '§ 9 Nutzungsrechte und geistiges Eigentum' }}
            </h2>
            <p>{{ isEn ? '(1) All workflows, automations, scripts, configurations, and other work results created by the Provider (hereinafter "Works") remain the intellectual property of the Provider.' : '(1) Alle vom Anbieter erstellten Workflows, Automatisierungen, Skripte, Konfigurationen und sonstigen Arbeitsergebnisse (nachfolgend „Werke") bleiben geistiges Eigentum des Anbieters.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) Upon full payment, the Client receives a simple, non-transferable, non-sublicensable right to use the Works for the duration of the contractual relationship and for the purpose agreed in the contract.' : '(2) Der Kunde erhält mit vollständiger Bezahlung ein einfaches, nicht übertragbares, nicht unterlizenzierbares Nutzungsrecht an den Werken für die Dauer des Vertragsverhältnisses und für den im Vertrag vereinbarten Zweck.' }}</p>
            <p class="mt-3">{{ isEn ? '(3) Upon termination of the contractual relationship, the Client\'s right of use expires. The Provider is not obligated to hand over or transfer the Works. A transfer of the Works may be agreed upon for a separate fee.' : '(3) Nach Beendigung des Vertragsverhältnisses erlischt das Nutzungsrecht des Kunden. Der Anbieter ist nicht verpflichtet, die Werke herauszugeben oder zu übertragen. Eine Übertragung der Werke kann gegen gesonderte Vergütung vereinbart werden.' }}</p>
            <p class="mt-3">{{ isEn ? '(4) The Client grants the Provider the right to use the Client\'s logo and company name as a reference on the Provider\'s own website and in marketing materials, unless the Client expressly objects.' : '(4) Der Kunde räumt dem Anbieter das Recht ein, das Kundenlogo und den Firmennamen als Referenz auf der eigenen Website und in Marketingmaterialien zu verwenden, sofern der Kunde dem nicht ausdrücklich widerspricht.' }}</p>
          </div>

          <!-- § 10 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 10 Data Protection and Data Processing' : '§ 10 Datenschutz und Auftragsverarbeitung' }}
            </h2>
            <p>{{ isEn ? '(1) Insofar as the Provider processes personal data on behalf of the Client in the course of providing services, the Provider acts as a data processor within the meaning of Art. 28 GDPR.' : '(1) Soweit der Anbieter im Rahmen der Leistungserbringung personenbezogene Daten im Auftrag des Kunden verarbeitet, handelt er als Auftragsverarbeiter im Sinne von Art. 28 DSGVO.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) The parties shall conclude a separate data processing agreement (DPA) before the commencement of data processing, which regulates the details of data processing.' : '(2) Die Parteien schließen vor Beginn der Datenverarbeitung einen gesonderten Auftragsverarbeitungsvertrag (AVV) ab, der die Einzelheiten der Datenverarbeitung regelt.' }}</p>
            <p class="mt-3">{{ isEn ? '(3) The Client remains the data controller within the meaning of the GDPR for all personal data processed through the implemented systems. The Client is responsible for the lawfulness of data collection and processing and for compliance with information obligations towards data subjects.' : '(3) Der Kunde bleibt Verantwortlicher im Sinne der DSGVO für alle personenbezogenen Daten, die über die implementierten Systeme verarbeitet werden. Der Kunde ist verantwortlich für die Rechtmäßigkeit der Datenerhebung und -verarbeitung sowie für die Einhaltung der Informationspflichten gegenüber den betroffenen Personen.' }}</p>
            <p class="mt-3">{{ isEn ? '(4) The Client shall indemnify the Provider against all third-party claims arising from unlawful processing of personal data by the Client or on the Client\'s behalf.' : '(4) Der Kunde stellt den Anbieter von allen Ansprüchen Dritter frei, die aufgrund einer rechtswidrigen Verarbeitung personenbezogener Daten durch den Kunden oder in dessen Auftrag entstehen.' }}</p>
          </div>

          <!-- § 11 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 11 Liability and Limitation of Liability' : '§ 11 Haftung und Haftungsbeschränkung' }}
            </h2>
            <p>{{ isEn ? '(1) The Provider shall have unlimited liability for damages arising from injury to life, body, or health, as well as for damages based on intentional or grossly negligent conduct by the Provider, its legal representatives, or vicarious agents.' : '(1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit des Anbieters, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) For slight negligence, the Provider shall only be liable in the event of a breach of material contractual obligations (cardinal obligations). In this case, liability is limited to the typically foreseeable damage. Material contractual obligations are those whose fulfillment makes the proper performance of the contract possible in the first place and on whose compliance the Client may regularly rely.' : '(2) Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.' }}</p>
            <p class="mt-3">{{ isEn ? '(3) Liability for slight negligence is limited in amount to twice the compensation paid in the relevant contract year, but not exceeding EUR 50,000.' : '(3) Die Haftung für leichte Fahrlässigkeit ist der Höhe nach begrenzt auf das Doppelte der im betreffenden Vertragsjahr gezahlten Vergütung, maximal jedoch 50.000 Euro.' }}</p>
            <p class="mt-3">{{ isEn ? '(4) The Provider expressly excludes liability for:' : '(4) Der Anbieter haftet ausdrücklich nicht für:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) The quality of leads processed through the systems — the Provider does not guarantee that leads will result in business closings or meet specific quality criteria</li>
              <li>b) Lost business, lost profits, or other indirect and consequential damages</li>
              <li>c) Damages caused by outages or changes at third-party providers (hosting providers, API providers, advertising platforms, etc.)</li>
              <li>d) Damages caused by incorrect or unlawfully collected data of the Client</li>
              <li>e) Damages caused by the Client's breach of cooperation obligations</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) die Qualität der über die Systeme verarbeiteten Leads — der Anbieter übernimmt keine Garantie dafür, dass Leads zu Geschäftsabschlüssen führen oder bestimmte Qualitätskriterien erfüllen</li>
              <li>b) entgangene Geschäfte, entgangenen Gewinn oder sonstige mittelbare Schäden und Folgeschäden</li>
              <li>c) Schäden, die durch Ausfälle oder Änderungen bei Drittanbietern (Hosting-Provider, API-Anbieter, Werbeplattformen, etc.) entstehen</li>
              <li>d) Schäden, die durch fehlerhafte oder rechtswidrig erhobene Daten des Kunden entstehen</li>
              <li>e) Schäden, die durch die Verletzung von Mitwirkungspflichten des Kunden entstehen</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(5) The foregoing limitations of liability also apply in favor of the Provider\'s legal representatives, employees, and vicarious agents.' : '(5) Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten der gesetzlichen Vertreter, Mitarbeiter und Erfüllungsgehilfen des Anbieters.' }}</p>
            <p class="mt-3">{{ isEn ? '(6) Liability under the Product Liability Act remains unaffected.' : '(6) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.' }}</p>
          </div>

          <!-- § 12 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 12 No Guarantee of Success' : '§ 12 Keine Erfolgsgarantie' }}
            </h2>
            <p>{{ isEn ? '(1) The Provider owes the performance of the agreed services (work performance for the setup, services for ongoing operations), but not a specific economic result.' : '(1) Der Anbieter schuldet die Erbringung der vereinbarten Dienstleistungen (Werkleistung für das Setup, Dienstleistung für den laufenden Betrieb), nicht jedoch einen bestimmten wirtschaftlichen Erfolg.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) The Provider specifically does not guarantee or warrant:' : '(2) Der Anbieter übernimmt insbesondere keine Garantie oder Zusicherung für:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) A specific number or quality of leads</li>
              <li>b) A specific conversion rate or closing rate</li>
              <li>c) A specific improvement in advertising campaign metrics</li>
              <li>d) The economic success of the Client</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) eine bestimmte Anzahl oder Qualität von Leads</li>
              <li>b) eine bestimmte Conversion-Rate oder Abschlussquote</li>
              <li>c) eine bestimmte Verbesserung von Werbekampagnen-Kennzahlen</li>
              <li>d) den wirtschaftlichen Erfolg des Kunden</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(3) Exemplary results, case studies, or references do not constitute a guarantee of comparable results for the Client. Results may vary depending on industry, market, quality of data sources, and other factors.' : '(3) Beispielhafte Ergebnisse, Fallstudien oder Referenzen stellen keine Garantie für vergleichbare Ergebnisse beim Kunden dar. Die Ergebnisse können je nach Branche, Markt, Qualität der Datenquellen und anderen Faktoren variieren.' }}</p>
          </div>

          <!-- § 13 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 13 Confidentiality' : '§ 13 Vertraulichkeit' }}
            </h2>
            <p>{{ isEn ? '(1) Both parties undertake to keep confidential all confidential information of the other party obtained in the course of the cooperation and not to disclose it to third parties.' : '(1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen der jeweils anderen Partei geheim zu halten und nicht an Dritte weiterzugeben.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) Confidential information includes all information that is marked as confidential or whose confidentiality is apparent from the circumstances, in particular trade secrets, technical information, customer data, and terms.' : '(2) Vertrauliche Informationen sind alle Informationen, die als vertraulich gekennzeichnet sind oder deren Vertraulichkeit sich aus den Umständen ergibt, insbesondere Geschäftsgeheimnisse, technische Informationen, Kundendaten und Konditionen.' }}</p>
            <p class="mt-3">{{ isEn ? '(3) The confidentiality obligation does not apply to information that:' : '(3) Die Vertraulichkeitsverpflichtung gilt nicht für Informationen, die:' }}</p>
            <ul v-if="isEn" class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) Are or become publicly known without this being due to a breach of this agreement</li>
              <li>b) Were already known to the receiving party prior to disclosure</li>
              <li>c) Were lawfully received from third parties without a confidentiality obligation</li>
              <li>d) Must be disclosed due to legal obligation or official order</li>
            </ul>
            <ul v-else class="mt-2 ml-4 space-y-1.5 list-none">
              <li>a) öffentlich bekannt sind oder werden, ohne dass dies auf einer Verletzung dieser Vereinbarung beruht</li>
              <li>b) der empfangenden Partei bereits vor der Offenlegung bekannt waren</li>
              <li>c) von Dritten rechtmäßig ohne Vertraulichkeitsverpflichtung erhalten wurden</li>
              <li>d) aufgrund gesetzlicher Verpflichtung oder behördlicher Anordnung offengelegt werden müssen</li>
            </ul>
            <p class="mt-3">{{ isEn ? '(4) The confidentiality obligation continues to apply after termination of the contractual relationship.' : '(4) Die Vertraulichkeitsverpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort.' }}</p>
          </div>

          <!-- § 14 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 14 Force Majeure' : '§ 14 Höhere Gewalt' }}
            </h2>
            <p>{{ isEn ? '(1) Neither party shall be liable for non-performance or delayed performance of its obligations if and to the extent that the non-performance or delay is attributable to force majeure.' : '(1) Keine Partei haftet für die Nichterfüllung oder verspätete Erfüllung ihrer Verpflichtungen, wenn und soweit die Nichterfüllung oder Verzögerung auf Umstände höherer Gewalt zurückzuführen ist.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) Force majeure includes in particular: natural disasters, war, terrorism, civil unrest, pandemics, governmental measures, failure of telecommunications networks or power supply, DDoS attacks and other cyber attacks, and failure of essential third-party providers.' : '(2) Höhere Gewalt umfasst insbesondere: Naturkatastrophen, Krieg, Terrorismus, Aufruhr, Pandemien, behördliche Maßnahmen, Ausfall von Telekommunikationsnetzen oder Stromversorgung, DDoS-Attacken und sonstige Cyberangriffe sowie Ausfälle wesentlicher Drittanbieter.' }}</p>
            <p class="mt-3">{{ isEn ? '(3) The affected party shall immediately inform the other party about the occurrence and expected duration of the force majeure event.' : '(3) Die betroffene Partei hat die andere Partei unverzüglich über den Eintritt und die voraussichtliche Dauer des Ereignisses höherer Gewalt zu informieren.' }}</p>
          </div>

          <!-- § 15 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 15 Amendments to the GTC' : '§ 15 Änderungen der AGB' }}
            </h2>
            <p>{{ isEn ? '(1) The Provider is entitled to amend these GTC with effect for the future, insofar as this is necessary for valid reasons and the Client is not unreasonably disadvantaged thereby.' : '(1) Der Anbieter ist berechtigt, diese AGB mit Wirkung für die Zukunft zu ändern, soweit dies aus triftigen Gründen erforderlich ist und der Kunde dadurch nicht unangemessen benachteiligt wird.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) Amendments will be communicated to the Client in text form (email). The amendments are deemed approved if the Client does not object in writing within 30 days of receipt of the notification. The Client will be specifically informed of this legal consequence in the amendment notification.' : '(2) Änderungen werden dem Kunden in Textform (E-Mail) mitgeteilt. Die Änderungen gelten als genehmigt, wenn der Kunde nicht innerhalb von 30 Tagen nach Zugang der Mitteilung schriftlich widerspricht. Auf diese Rechtsfolge wird der Kunde in der Änderungsmitteilung besonders hingewiesen.' }}</p>
          </div>

          <!-- § 16 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 16 Final Provisions' : '§ 16 Schlussbestimmungen' }}
            </h2>
            <p>{{ isEn ? '(1) The law of the Republic of Austria shall apply, excluding the UN Convention on Contracts for the International Sale of Goods (CISG) and the conflict of laws rules of private international law.' : '(1) Es gilt das Recht der Republik Österreich unter Ausschluss des UN-Kaufrechts (CISG) und der Verweisungsnormen des internationalen Privatrechts.' }}</p>
            <p class="mt-3">{{ isEn ? '(2) The exclusive place of jurisdiction for all disputes arising from or in connection with this contract is Graz, Austria, insofar as the Client is an entrepreneur.' : '(2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Graz, Österreich, soweit der Kunde Unternehmer ist.' }}</p>
            <p class="mt-3">{{ isEn ? '(3) Should individual provisions of these GTC be or become invalid, this shall not affect the validity of the remaining provisions. The parties undertake to replace the invalid provision with an effective provision that comes closest to the economic purpose of the invalid provision.' : '(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die Parteien verpflichten sich, anstelle der unwirksamen Bestimmung eine wirksame Regelung zu treffen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung möglichst nahe kommt.' }}</p>
            <p class="mt-3">{{ isEn ? '(4) No oral side agreements exist. Amendments and supplements to this contract require written form. This also applies to the waiver of this written form requirement. Written form is satisfied by email.' : '(4) Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen dieses Vertrages bedürfen der Schriftform. Dies gilt auch für die Abbedingung dieses Schriftformerfordernisses. Die Schriftform wird durch E-Mail gewahrt.' }}</p>
            <p class="mt-3">{{ isEn ? '(5) The invalidity of individual provisions does not affect the validity of the remaining GTC.' : '(5) Die Unwirksamkeit einzelner Bestimmungen berührt die Gültigkeit der übrigen AGB nicht.' }}</p>
          </div>

          <!-- § 17 -->
          <div>
            <h2 class="text-lg font-semibold mb-3" style="color: #0F1419">
              {{ isEn ? '§ 17 Contact' : '§ 17 Kontakt' }}
            </h2>
            <p>
              Doblyx AI GmbH<br />
              Schildbach 42<br />
              8230 Hartberg<br />
              {{ isEn ? 'Austria' : 'Österreich' }}
            </p>
            <p class="mt-3">
              {{ isEn ? 'Managing Director' : 'Geschäftsführer' }}: Eric Dobler<br />
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
