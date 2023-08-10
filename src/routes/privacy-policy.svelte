<script>
  import { theme } from '$lib/stores/theme'
  import Banner from '$lib/Blocks/Banner.svelte'
  import MetaTags from '$lib/Components/MetaTags.svelte'

  $theme = {
    footer: 'light',
    header: 'light',
  }
  const title = 'Privacy Policy | Climate Policy Radar'
  const excerpt = 'Climate Policy Radar privacy policy'
  const image = 'https://climatepolicyradar.org/images/logo.png'
  const path = '/privacy-policy'
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner theme="light" size="sm">
  <h1 slot="heading" class="u-gradient-text--dark-to-blue">Privacy Policy</h1>
  <h2>Introduction</h2>
  <div class="b-content__wrapper">
    <p>
      Climate Policy Radar CIC, registered at Sustainable County Hall, 3rd Floor, Westminster Bridge Road, London SE1
      7PB, is a Community Interest Company Limited by Guarantee registered in England and Wales (Company number
      13377442), hereafter collectively referred to as 'Climate Policy Radar', ‘CPR’, ‘we’ or the ‘Company’. We are
      committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose,
      transfer, and store your information and sets out your rights under the relevant laws of Data Protection. We are
      committed to the highest standards of privacy and data protection under the UK General Data Protection Regulation
      (GDPR), California Consumer Privacy Act (CCPA), and all other relevant legislation.
    </p>
    <p>
      This Privacy Policy applies to Climate Policy Radar’s website (accessible via <a
        href="https://climatepolicyradar.org"
        target="_blank">climatepolicyradar.org</a
      >), app (accessible via
      <a href="https://app.climatepolicyradar.org" target="_blank">app.climatepolicyradar.org</a>), partner sites which
      use CPR’s technology (for example
      <a href="https://climate-laws.org" target="_blank">climate-laws.org</a>, and any other CPR software (for example
      gst1.org), collectively referred to as ‘websites and apps’. We may update this policy as we expand our online
      services, and will list here other websites and apps that it applies to. This policy is not applicable to any
      information collected offline or via channels other than Climate Policy Radar websites and apps, or to other
      online services or activities not explicitly mentioned here.
    </p>
  </div>
  <h2>Contacting CPR</h2>
  <div class="b-content__wrapper">
    <p>
      To exercise your rights over your data, ask any questions regarding this Privacy Policy (or any other question
      relating to Climate Policy Radar, our websites, or our apps), or submit any other inquiries regarding data
      protection, privacy, or security matters, please email <a
        href="mailto:support@climatepolicyradar.org"
        target="_blank">support@climatepolicyradar.org</a
      >.
    </p>
  </div>
  <h2>Cookie Policy</h2>
  <div class="b-content__wrapper">
    <p>
      Like any other website, CPR uses ‘cookies’. These are used to store information, including preferences or
      information about the pages that you have visited. When we refer to cookies, we also include (for ease) similar
      technologies that store or access information on your browser or device, such as local storage (storage of data in
      your browser’s cache), pixels (small graphics that help track your activity), or scripts (small pieces of code in
      websites that can use your browser or device functionality to enhance experience). Find out more <a
        href="https://www.termsfeed.com/blog/cookies/"
        target="_blank">about cookies</a
      >.
    </p>
    <h3>Cookie usage</h3>
    <p>We use cookies to help improve your experience on our websites and apps, including:</p>
    <ul>
      <li>Understanding how you use our site, such as which pages you visit or which links you click</li>
      <li>Showing content to you according to your preferences, such as in the right language</li>
      <li>Managing and securing login information</li>
      <li>Working with partners to improve our products and services</li>
      <li>Identifying and rectifying bugs or interface issues</li>
      <li>Developing new products, services, features and functionality</li>
    </ul>
    <p>We use cookies for:</p>
    <ul>
      <li>Strictly Necessary purposes, such as storing your preferences or managing and securing your login details</li>
      <li>
        Performance, functionality, and analytics, such as measuring how often you visit our sites and apps or what
        pages you visit
      </li>
    </ul>
    <h3>Third-party cookies</h3>
    <p>
      While some of the cookies that we use are “first-party” (set and controlled by CPR), we also use third-party
      services to help us. With your consent, we will use cookies from the following third-party services:
    </p>
    <ul>
      <li>
        <b>Hotjar</b>
        <p>
          We use Hotjar to better understand your needs and to optimise this service and experience. Hotjar is a
          technology service that helps us better understand your experience (e.g., how much time you spend on which
          pages, which links you choose to click, what you do and don’t like, etc.) and this enables us to build and
          maintain our service with user feedback. Hotjar uses cookies and other technologies to collect data on your
          behaviour and devices. This includes a device's IP address (processed during your session and stored in a
          de-identified form), device screen size, device type (unique device identifiers), browser information,
          geographic location (country only), and the preferred language used to display our website. Hotjar stores this
          information on our behalf in a pseudonymised (de-identified) user profile. Hotjar is contractually forbidden
          to sell any of the data collected on our behalf.
        </p>
        <p>
          If you interact with our surveys or feedback forms provided by Hotjar, additional cookies are set to support
          that service. Data you submit is used only for the purpose stated and governed by our data handling policies
          detailed below. We only collect Personally Identifiable Information through Hotjar when submitted voluntarily
          on surveys or feedback forms. Otherwise, Hotjar analytics does not collect Personally Identifiable Information
          when tracking usage.
        </p>
        <p>
          For further details, please see the ‘about Hotjar’ section of <a
            href="https://help.hotjar.com/hc/en-us/categories/115001323967-About-Hotjar"
            target="_blank">Hotjar’s support site</a
          >.
        </p>
      </li>
      <li>
        <b>Google Analytics</b>
        <p>
          We use Google Analytics to monitor usage of the CPR websites and apps. This information allows us to assess
          how our websites and apps are used. We collect and aggregate anonymous data about usage (e.g., number of
          visitors, visitors' country, number of times each page is visited) to produce performance reports.
        </p>
        <p>
          You may opt‐out of Google Analytics by installing the Google Analytics opt‐out browser add‐on or by
          configuring your browser settings to block the use of cookies.
        </p>
        <p>
          For further details, please see the ‘Analytics’ section of Google’s <a
            href="https://policies.google.com/technologies/cookies"
            target="_blank">Privacy Policy</a
          >.
        </p>
      </li>
      <li>
        <b>Matomo</b>
        <p>
          We use Matomo for the same purposes as Google Analytics. You may opt‐out by configuring your browser settings
          to block the use of cookies.
        </p>
        <p>
          For further details, please see the Matomo Cloud <a
            href="https://matomo.org/matomo-cloud-privacy-policy/"
            target="_blank"
          >
            Privacy Policy
          </a>.
        </p>
      </li>
      <li>
        <b>YouTube</b>
        <p>
          We may embed YouTube videos in our websites and apps that use cookies as part of their operation. This
          information allows YouTube to track your viewing preferences and behaviour while watching videos.
        </p>
        <p>
          For further details, please see YouTube’s <a
            href="https://www.youtube.com/intl/ALL_uk/howyoutubeworks/our-commitments/protecting-user-data/"
            target="_blank">Privacy Policy</a
          >.
        </p>
      </li>
    </ul>
    <p>
      If you reject cookies using the popup box on our apps and websites, we will disable all analytics cookies listed
      above. You can also turn on the <a href="https://allaboutdnt.com/" target="_blank">Do Not Track</a> setting in your
      browser. Hotjar will respect this setting, but Google Analytics (and many other companies) do not respect it automatically.
      We ensure our usage of analytical tools respects this setting and if you turn it on in your browser, we will not track
      you.
    </p>
    <p>
      Some of our public-facing R&D tools (such as the <a href="http://gst1.org" target="_blank">gst1.org</a> explorer,
      or some tools on labs.climatepolicyradar.org) use Retool, a platform for rapid development of web applications.
      Retool uses sets third-party cookies and requires cookies for operation of the software. We do not use analytics
      in Retool but Retool responsibly sets cookies as part of its operation and tracks user data as set out in their
      <a href="https://docs.retool.com/page/privacy-policy" target="_blank">privacy policy</a>
      and <a href="https://retool.com/tos.pdf" target="_blank">terms of use</a>. Cookies in Retool powered apps are
      strictly necessary for operating the software and cannot be opted out of. We do not receive any analytics
      information or personally-identifying information from Retool.
    </p>
  </div>
  <h2>What information do we collect?</h2>
  <div class="b-content__wrapper">
    <p>We collect personal information that you voluntarily provide only through interfaces such as:</p>
    <ul>
      <li>Expressing an interest in obtaining information about us or our products or services</li>
      <li>Contacting us directly via email, social media, or contact forms</li>
    </ul>
    <p>
      The personal information that we collect depends on the nature of the interaction, but will typically include your
      name, email address, telephone number, password for our apps, contact preferences, and/or home or business
      address. You can always refuse to supply such information, but it may prevent you from engaging in certain
      site-related activities. We only collect such information either with explicit consent or under a valid legal
      basis under the UK GDPR, such as the provision of our services.
    </p>
    <p>
      We do not knowingly collect any Personally Identifiable Information from children under the age of 13 as per UK
      GDPR guidelines. If you think that your child provided this kind of information to us, we strongly encourage you
      to contact us immediately and we will promptly remove such information from our records.
    </p>
  </div>
  <h2>Where do we store your information?</h2>
  <div class="b-content__wrapper">
    <p>
      We use a number of service providers for managing our operations, products and services. Information is stored in
      secure, regulated data-centres in the UK, Ireland, and USA.
    </p>
  </div>
  <h2>How we use your information</h2>
  <div class="b-content__wrapper">
    <p>
      In addition to the uses detailed in our Cookie Policy above, we also process personal information collected
      voluntarily as above as necessary to provide you with services or activities that you’ve requested and/or
      consented to, such as:
    </p>
    <ul>
      <li>Notifications of new or changed services</li>
      <li>Marketing or training</li>
      <li>Improving our product offering</li>
      <li>Responding to user inquiries or support requests</li>
      <li>
        Complying with applicable laws and regulations, including informing you of any suspected breaches or violations
        of your rights
      </li>
    </ul>
    <p>
      When you provide us with your information, we will ask for informed consent to collect it for the purpose
      specified. Climate Policy Radar will only use your personal information for the specified purpose and we will ask
      for additional consent to use it for any other purpose.
    </p>
  </div>
  <h2>Who your information is shared with</h2>
  <div class="b-content__wrapper">
    <p>We only share and disclose your information with the following categories of third parties:</p>
    <ul>
      <li>Cloud computing services</li>
      <li>Data analytics services</li>
      <li>Data storage service providers</li>
      <li>
        Sales and marketing tool providers such as customer relations management (CRM) software or mailing list tools.
      </li>
    </ul>
    <p>
      If we have processed your data based on your consent and you wish to revoke your consent, please contact us at <a
        href="mailto:support@climatepolicyradar.org"
        target="_blank">support@climatepolicyradar.org</a
      >.
    </p>
  </div>
  <h2>GDPR Data Protection Rights</h2>
  <div class="b-content__wrapper">
    <p>
      You have a number of data protection rights under the UK General Data Protection Regulation (GDPR). These are:
    </p>
    <ul>
      <li>The right to access, to request copies of your personal data</li>
      <li>
        The right to rectification, to request that we correct any information you believe is inaccurate or incomplete
      </li>
      <li>The right to erasure, to request that we fully delete your personal data (under certain conditions)</li>
      <li>
        The right to restrict processing, to request that we limit processing of your personal data (under certain
        conditions)
      </li>
      <li>
        The right to object to processing, to request that we stop processing of your personal data (under certain
        conditions)
      </li>
      <li>
        The right to portability, to request that we transfer data that we have collected to another organisation or you
        (under certain conditions)
      </li>
    </ul>
    <p>
      To exercise these rights, please contact <a href="mailto:support@climatepolicyradar.org" target="_blank"
        >support@climatepolicyradar.org</a
      > and we will respond to you within a maximum of one month of receiving the request.
    </p>
  </div>
  <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
  <div class="b-content__wrapper">
    <p>Under the California Consumer Privacy Act (CCPA), among other rights, California consumers have the right to:</p>
    <ul>
      <li>
        Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of
        personal data that a business has collected about consumers
      </li>
      <li>Request that a business delete any personal data about the consumer that a business has collected</li>
      <li>Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data</li>
    </ul>
    <p>
      If you make a request, after receiving it we have one month to respond to you. If you would like to exercise any
      of these rights, please contact us at <a href="mailto:support@climatepolicyradar.org" target="_blank"
        >support@climatepolicyradar.org</a
      >.
    </p>
  </div>
  <h2>Logs and other automatically collected information</h2>
  <div class="b-content__wrapper">
    <p>
      Climate Policy Radar, like all online sites and apps, uses log files. These files log visits to websites and
      collect internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), timestamps, and
      referring/exit pages. These are not linked to any Personally Identifiable Information. We store this information
      to analyse trends, administer our websites and apps, and identify and remediate bugs and other issues.
    </p>
  </div>
  <h2>Sharing information via social media platforms</h2>
  <div class="b-content__wrapper">
    <p>
      Our websites and apps may have links embedded into pages on various social media platforms. Cookies generated by
      those sites are outside of our control and may change without notice. When you share a page or link those sites
      may set cookies on your device or browser and may also make information about you publicly available or stored
      elsewhere. For more information about privacy and the cookies used by these services, as well as information on
      how to opt-out, please visit the respective social media platforms.
    </p>
  </div>
  <h2>Date of last revision</h2>
  <div class="b-content__wrapper">
    <p>This Policy was last updated on 19th October 2022.</p>
  </div>
  <h2>Updates to this policy</h2>
  <div class="b-content__wrapper">
    <p>
      We may update this Policy at any time. When we do, we will update the date of last revision above. We encourage
      you to frequently check this page to stay informed about how we protect the information that we collect. You
      acknowledge and agree that it is your responsibility to review this policy periodically and make yourself aware of
      modifications.
    </p>
  </div>
</Banner>

<style>
  h2 {
    margin: 1em 0;
  }
  .b-content__wrapper :global(p),
  .b-content__wrapper :global(li),
  .b-content__wrapper :global(a),
  .b-content__wrapper :global(span) {
    font-size: 16px;
    line-height: 24px;
  }

  b {
    font-weight: 500;
  }
</style>
