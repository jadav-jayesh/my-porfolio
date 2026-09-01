import React, { useState } from "react";
import useStyles from "./styles";
import {
  Alert,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Setting } from "../../Utils/setting";
import SendIcon from "@mui/icons-material/Send";
import { Email, Phone, LocationOn, ContentCopy, Check } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import Eyebrow from "../Eyebrow";

function Contact() {
  const { themeData } = useSelector((state) => state.auth);
  const className = useStyles(themeData)();
  const { email_regex, phone_regex } = Setting.JS_Regex;
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [btnLoad, setBtnLoad] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jadav241198@gmail.com");
    setCopiedEmail(true);
    setSnackbar({
      open: true,
      message: "Email copied: jadav241198@gmail.com",
      severity: "success",
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Name is required";
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email_regex.test(formValues.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phone_regex.test(formValues.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formValues.subject.trim()) newErrors.subject = "Subject is required";
    if (!formValues.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        setBtnLoad(true);
        const response = await emailjs.send(
          "service_vbcwp8e",
          "template_8dgreb4",
          formValues,
          "J-L9Nk5hoIdsDng9t"
        );
        console.log("Message sent successfully:", response);
        setSnackbar({
          open: true,
          message: "Message sent successfully! I'll get back to you within 24 hours.",
          severity: "success",
        });
        setFormValues({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.log("Error sending message:", error);
        setSnackbar({
          open: true,
          message: "Failed to send message. Please email me directly at jadav241198@gmail.com",
          severity: "error",
        });
      } finally {
        setBtnLoad(false);
      }
    }
  };

  return (
    <div className={className.container}>
      <Grid container justifyContent="center" sx={{ width: "100%", maxWidth: "1100px", px: { xs: 1.5, sm: 2, md: 4 } }}>
        <Grid size={12} sx={{ textAlign: "center", mb: { xs: 2.5, sm: 4 } }}>
          <Eyebrow index="04" label="Get In Touch" />
          <Typography variant="h1" sx={{ fontSize: "clamp(26px, 4vw, 42px) !important", fontWeight: "700 !important", color: themeData.headerText, mt: 1 }}>
            Let's Build Together
          </Typography>
          <Typography variant="subText" sx={{ color: themeData.textSecondary, mt: 1, maxWidth: "550px", mx: "auto", px: 1 }}>
            Available for Frontend, React Native & Full-Stack roles (Remote or Hybrid).
          </Typography>
        </Grid>

        {/* Direct Contact Cards */}
        <Grid size={12} sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: { xs: 1, sm: 2 }, mb: { xs: 3, sm: 4 } }}>
          <Button
            onClick={handleCopyEmail}
            startIcon={copiedEmail ? <Check sx={{ color: "#22d3ee" }} /> : <Email />}
            endIcon={<ContentCopy sx={{ fontSize: "14px !important", opacity: 0.7 }} />}
            sx={{
              padding: { xs: "8px 14px !important", sm: "10px 20px !important" },
              borderRadius: "12px !important",
              backgroundColor: `${themeData.glassBg} !important`,
              border: `1px solid ${themeData.glassBorder} !important`,
              color: `${themeData.text} !important`,
              textTransform: "none",
              fontWeight: "600 !important",
              fontSize: { xs: "12.5px !important", sm: "13.5px !important" },
              maxWidth: "100%",
              "&:hover": { borderColor: themeData.accent },
            }}
          >
            jadav241198@gmail.com
          </Button>

          <Button
            component="a"
            href="tel:+919054736628"
            startIcon={<Phone />}
            sx={{
              padding: { xs: "8px 14px !important", sm: "10px 20px !important" },
              borderRadius: "12px !important",
              backgroundColor: `${themeData.glassBg} !important`,
              border: `1px solid ${themeData.glassBorder} !important`,
              color: `${themeData.text} !important`,
              textTransform: "none",
              fontWeight: "600 !important",
              fontSize: { xs: "12.5px !important", sm: "13.5px !important" },
              maxWidth: "100%",
              "&:hover": { borderColor: themeData.accent },
            }}
          >
            +91 9054736628
          </Button>

          <Chip
            icon={<LocationOn sx={{ color: "#22d3ee !important" }} />}
            label="Gujarat, India (Open to Remote)"
            sx={{
              padding: { xs: "16px 12px", sm: "18px 14px" },
              borderRadius: "12px",
              backgroundColor: themeData.glassBg,
              border: `1px solid ${themeData.glassBorder}`,
              color: themeData.text,
              fontWeight: 600,
              fontSize: { xs: "12.5px", sm: "13.5px" },
              maxWidth: "100%",
            }}
          />
        </Grid>

        <Grid size={12} className={className.formCard}>
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  placeholder="e.g. Alex Smith"
                  value={formValues.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="alex@company.com"
                  value={formValues.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formValues.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Subject / Role"
                  name="subject"
                  placeholder="Frontend / React Native Role"
                  value={formValues.subject}
                  onChange={handleChange}
                  error={!!errors.subject}
                  helperText={errors.subject}
                  required
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  name="message"
                  placeholder="Hi Jayesh, we'd like to discuss a frontend role..."
                  value={formValues.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  required
                />
              </Grid>

              <Grid size={12} sx={{ textAlign: "center", mt: 1 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={btnLoad}
                  endIcon={
                    !btnLoad && (
                      <SendIcon
                        style={{
                          transform: "rotate(-45deg)",
                          marginBottom: 4,
                          marginLeft: 6,
                        }}
                      />
                    )
                  }
                  sx={{
                    padding: { xs: "12px 24px !important", sm: "12px 32px !important" },
                    fontSize: "15px !important",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  {btnLoad ? <CircularProgress size={22} color="inherit" /> : "Send Message"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ fontWeight: 600 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;
