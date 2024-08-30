import React, { useState, useEffect } from "react";

// Define the styles directly in the component or import a CSS file with these styles
const styles = {
  body: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  bg: {
    backgroundImage: "url(../../public/images/TermsBackground.png)",
    height: "100vh",
    width: "100%",
    position: "absolute",
    backgroundSize: "cover",
    filter: "blur(5px)",
    zIndex: -1,
    opacity: 0.7,
  },
  termsBox: {
    maxWidth: "460px",
    backgroundColor: "rgba(83, 83, 83, 0.9)",
    color: "#fff",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    padding: "20px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowY: "auto",
    fontSize: "14px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
  termsBoxHidden: {
    opacity: 0,
    transform: "translate(-50%, -60%)",
  },
  termsText: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#fff",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  btn: {
    height: "50px",
    width: "calc(50% - 6px)",
    border: 0,
    borderRadius: "6px",
    fontSize: "19px",
    fontWeight: 500,
    color: "#fff",
    transition: "0.3s linear",
    cursor: "pointer",
  },
  redBtn: {
    backgroundColor: "rgb(245, 68, 68)",
  },
  grayBtn: {
    backgroundColor: "#282828",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.5em",
    textAlign: "center",
  },
  overlayContent: {
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    borderRadius: "10px",
  },
  redSpan: {
    color: "red",
    fontWeight: "bold",
  },
  email: {
    color: "#3366cc", // Medium-light blue text color
    backgroundColor: "#000", // Black background color
    padding: "2px 4px", // Optional padding to give some space around the text
    borderRadius: "4px", // Optional border-radius for rounded corners
    fontWeight: "bold",
  },
};

const TermsAndConditions = ({ onTermsAccepted }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAccept = () => {
    setIsVisible(false);
    onTermsAccepted(); // Notify parent component
  };

  const handleDecline = () => {
    setIsVisible(false); // Hide terms box when declining
    setShowOverlay(true); // Show overlay when declining
  };

  const handleOverlayClick = () => {
    setShowOverlay(false); // Hide overlay when overlay is clicked
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [isVisible]);

  return (
    <div style={styles.body}>
      <div style={styles.bg}></div>
      <div
        style={{
          ...styles.termsBox,
          ...(isVisible ? {} : styles.termsBoxHidden),
        }}
      >
        <div style={styles.termsText}>
          <h2>Terms And Conditions</h2>
          <p>Last Edit: 1/15/1998</p>
          <p>Greetings User</p>
          <p>
            These Terms and Conditions ("Terms") govern your access to and use
            of our services ("the Services"). By accessing or using the
            Services, you ("the User") agree to be bound by these Terms. If you
            do not agree to any part of these Terms, please discontinue use of
            the Services immediately.
          </p>
          <p>
            1. Acceptance of Terms By continuing to use the Services, you
            confirm that you have read, understood, and accepted these Terms in
            full. You are responsible for periodically reviewing these Terms, as
            we reserve the right to modify them at any time without prior
            notice. Your continued use of the Services following any changes
            constitutes acceptance of those changes.
          </p>
          <p>
            2. User Account Responsibilities You are responsible for maintaining
            the confidentiality of your account credentials and for all
            activities that occur under your account. You agree to notify us
            immediately of any unauthorized use of your account or any other
            breach of security. We are not liable for any loss or damage arising
            from your failure to protect your account information.
          </p>
          <p>
            3. Intellectual Property Rights All content, trademarks, logos, and
            other intellectual property on the Services are owned by or licensed
            to us. You are granted a limited, non-exclusive, non-transferable
            license to access and use the Services for personal, non-commercial
            purposes. Any other use, including reproduction, distribution, or
            modification, is prohibited without our express written permission.
          </p>
          <p>
            4. Privacy and Data Protection We are committed to protecting your
            privacy. Our collection and use of your personal data are governed
            by our Privacy Policy, which details how we handle your information.
            We may also collect non-personal data to enhance the Services,
            including analytics about user interactions and preferences. This
            data may be used to improve our services and ensure a better user
            experience.
          </p>
          <p>
            5. Third-Party Services and Links Our Services may contain links to
            third-party websites and services. We do not control and are not
            responsible for the content or practices of these third parties.
            Your interactions with these third-party services are governed by
            their respective terms and privacy policies. We are not liable for
            any issues arising from your use of these third-party services.
          </p>
          <p>
            6. User-Generated Content You retain ownership of any content you
            submit to the Services, but you grant us a perpetual, royalty-free,
            and worldwide license to use, reproduce, modify, and display such
            content. You are solely responsible for any content you post and
            must ensure it complies with applicable laws and does not infringe
            upon any third-party rights.
          </p>
          <p>
            7. Prohibited Activities You agree not to engage in any activities
            that: Violate applicable laws or regulations. Interfere with the
            operation of the Services. Attempt to gain unauthorized access to
            other users' accounts. Transmit any harmful or disruptive code,
            including but not limited to malware or spyware. Engage in
            unauthorized activities as outlined in Clause 9.
          </p>
          <p>
            8. Limitation of Liability We are not liable for any damages,
            losses, or costs incurred by you in connection with the use of the
            Services, including but not limited to: Indirect, incidental, or
            consequential damages. Loss of data, revenue, or profit. Unexpected
            weightlessness or gravity reversal. Any adverse effects from
            consuming cookies provided by us.
          </p>
          <p>
            9. Health and Safety Provision You acknowledge and consent to the
            following: We reserve the right to request one (1) non-essential
            organ (e.g., kidney, spleen, appendix) for health and safety
            compliance purposes. In return, you will receive a 5% discount on
            future purchases.
          </p>
          <p>
            10. Pet Custodianship Agreement In the event that you are relocated
            to an alternate dimension or similar situation, all rights to your
            pets will be transferred to us. We will assume custodianship and
            care for your pets under the new designation "Mr. Whiskers,"
            regardless of their original name or species.
          </p>
          <p>
            11. Charitable Donations Clause If you make any charitable donations
            while using our Services, you must do so in the name of our Lord and
            Savior Zl’xarthion the Destroyer of Worlds. We may also retain a
            small percentage of your donation to cover administrative costs
            related to charitable activities.
          </p>
          <p>
            12. Personal Asset Rights In the event that you are abducted by
            demonic entities or other supernatural beings, you acknowledge that
            your personal assets, including but not limited to your soul, become
            the property of our organization. You are prohibited from trading,
            selling, or otherwise transferring these assets without our express
            written consent.
          </p>
          <p>
            13. Future Amendments We reserve the right to make any amendments or
            modifications to these Terms at our discretion. It is your
            responsibility to review these Terms periodically for any changes.
            Your continued use of the Services after any modifications indicates
            your acceptance of the revised Terms.
          </p>
          <p>
            14. Indemnification You agree to indemnify and hold us harmless from
            any claims, liabilities, damages, losses, or expenses (including
            reasonable attorneys' fees) arising out of or in any way related to
            your use of the Services, violation of these Terms, or infringement
            of any third-party rights.
          </p>
          <p>
            15. Termination We reserve the right to terminate or suspend your
            access to the Services at any time, with or without cause, without
            prior notice. Upon termination, all provisions of these Terms that
            by their nature should survive termination shall survive, including
            but not limited to ownership provisions, warranty disclaimers, and
            limitations of liability.
          </p>
          <p>
            16. Governing Law These Terms shall be governed by and construed in
            accordance with the laws of the jurisdiction in which we operate,
            without regard to its conflict of laws principles. Any disputes
            arising out of or in connection with these Terms shall be subject to
            the exclusive jurisdiction of the courts located in that
            jurisdiction.
          </p>
          <p>
            17. Modifications to the Services We reserve the right to modify,
            suspend, or discontinue the Services (or any part thereof) at any
            time, with or without notice. We may also impose limits on certain
            features or restrict access to parts of the Services at our sole
            discretion.
          </p>
          <p>
            18. Severability Clause If any provision of these Terms is found to
            be unenforceable or invalid under any applicable law, such provision
            shall be interpreted to accomplish the objectives of the original
            provision to the greatest extent possible, and the remaining
            provisions will continue in full force and effect.
          </p>
          <p>
            19. Entire Agreement These Terms constitute the entire agreement
            between you and us regarding your use of the Services and supersede
            all prior and contemporaneous agreements, proposals, or
            representations, written or oral, concerning its subject matter.
          </p>
          <p>
            20. Dispute Resolution Any disputes arising under these Terms shall
            be resolved through informal negotiations. If informal negotiations
            fail, disputes will be submitted to binding arbitration in
            accordance with the rules of the Arbitrary Tribunal of Legendary
            Creatures.
          </p>
          <p>
            21. Refund Policy Refunds for any purchases made through the
            Services will be provided in accordance with our Refund Policy. We
            reserve the right to deny refunds for reasons including but not
            limited to misuse of our products or services, or dissatisfaction
            with our cookie flavors.
          </p>
          <p>
            22. Force Majeure We are not liable for any failure to perform our
            obligations under these Terms if such failure is due to
            circumstances beyond our reasonable control, including but not
            limited to natural disasters, acts of war, or zombie apocalypses.
          </p>
          <p>
            23. Account Security You are responsible for maintaining the
            security of your account. This includes safeguarding your login
            credentials and taking appropriate measures to prevent unauthorized
            access. We are not liable for any loss or damage resulting from
            unauthorized access to your account.
          </p>
          <p>
            24. Use of Cookies We use cookies to enhance your experience on our
            website. By using our Services, you consent to our use of cookies in
            accordance with our Cookie Policy. This includes, but is not limited
            to, virtual and edible cookies.
          </p>
          <p>
            25. Communication Preferences By agreeing to these Terms, you
            consent to receive communications from us, including promotional
            emails, newsletters, and notifications about updates to the
            Services. You may opt out of receiving such communications at any
            time by following the unsubscribe instructions provided in each
            communication.
          </p>
          <p>
            26. Social Media and Publicity We may use your name, likeness, and
            feedback for promotional purposes, including but not limited to
            social media posts, advertisements, and marketing materials. By
            using our Services, you grant us permission to use such materials
            without compensation.
          </p>
          <p>
            27. Feedback and Suggestions Any feedback or suggestions you provide
            to us regarding the Services are voluntary and become our property.
            We may use such feedback or suggestions for any purpose without
            compensation to you.
          </p>
          <p>
            {" "}
            <span2 style={styles.email}>TheGlobalChronicles@gmail.com</span2>
          </p>
        </div>
        <h4>
          I Agree To The{" "}
          <span style={styles.redSpan}>Terms And Conditions</span> And I Have
          Read The Privacy Notice
        </h4>
        <div style={styles.buttonsContainer}>
          <button
            style={{ ...styles.btn, ...styles.redBtn }}
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            style={{ ...styles.btn, ...styles.grayBtn }}
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>

      {/* Black overlay */}
      {showOverlay && (
        <div style={styles.overlay} onClick={handleOverlayClick}>
          <div style={styles.overlayContent}>
            <p>You have declined the terms and conditions.</p>
            <p>Please contact support for further assistance.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;
