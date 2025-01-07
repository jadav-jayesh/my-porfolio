import React, { useState } from "react";
import useStyles from "./styles";
import {
  Alert,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { colors } from "../../Config/theme";
import { Setting } from "../../Utils/setting";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";

function Contact() {
  const className = useStyles();
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
    severity: "success", // success or error
  });
  const [btnLoad, setBtnLoad] = useState(false);

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
        // Send email via EmailJS
        const response = await emailjs.send(
          "service_vbcwp8e", // Replace with your EmailJS service ID
          "template_8dgreb4", // Replace with your EmailJS template ID
          formValues, // This will send the form values as parameters
          "J-L9Nk5hoIdsDng9t" // Replace with your EmailJS user ID
        );
        console.log("Message sent successfully:", response);
        setSnackbar({
          open: true,
          message: "Form submitted successfully!",
          severity: "success",
        });
        // Clear form after successful submission
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
          message: "Failed to send message, please try again.",
          severity: "error",
        });
      } finally {
        setBtnLoad(false);
      }
    }
  };

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11, md: 10 }}>
        <Grid style={{ textAlign: "center" }}>
          <Typography variant="title" style={{ color: colors.primary }}>
            Contact
          </Typography>
          <Typography variant="h1">Contact With Me</Typography>
        </Grid>
        <Grid className={className.section}>
          <Grid size={8}>
            <form onSubmit={handleSubmit} noValidate>
              <Grid style={{ display: "flex", flexWrap: "wrap" }} gap={2}>
                {/* Name Field */}
                <Grid item size={{ xs: 12, md: 5.8 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    placeholder="Enter your name"
                    value={formValues.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                </Grid>

                {/* Email Field */}
                <Grid item size={{ xs: 12, md: 5.8 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formValues.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>

                {/* Phone Field */}
                <Grid item size={{ xs: 12, md: 5.8 }}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    type="number"
                    placeholder="Enter your phone"
                    InputProps={{
                      inputProps: { maxLength: 10 }, // Restrict to 10 characters
                    }}
                    value={formValues.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    required
                  />
                </Grid>

                <Grid item size={{ xs: 12, md: 5.8 }}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    placeholder="Enter your subject"
                    value={formValues.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    required
                  />
                </Grid>

                {/* Message Field */}
                <Grid item size={{ xs: 12, md: 11.8 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    name="message"
                    placeholder="Enter your message"
                    value={formValues.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item size={12} style={{ textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={
                      <SendIcon
                        style={{
                          transform: "rotate(-45deg)",
                          marginBottom: 5,
                          marginLeft: 10,
                        }}
                      />
                    }
                  >
                    {btnLoad ? <CircularProgress size={22} /> : "Send Message"}
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Snackbar
              open={snackbar.open}
              autoHideDuration={6000} // auto-hide after 6 seconds
              onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
              <Alert
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                severity={snackbar.severity}
                variant="filled"
                sx={{ width: "100%" }}
              >
                {snackbar.message}
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
