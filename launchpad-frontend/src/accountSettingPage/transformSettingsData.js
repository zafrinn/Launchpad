export function transformSettingsData(data) {
  if (!data || !data.profile) {
    return {};
  }

  const accSettingsData = {
    fullname: {
      title: "Full Name",
      subtitle: "Edit your first and last name",
      fields: [
        {
          label: "First Name",
          placeholder:
            (data.profile.full_name && data.profile.full_name.split(" ")[0]) ||
            "",
        },
        {
          label: "Last Name",
          placeholder:
            (data.profile.full_name && data.profile.full_name.split(" ")[1]) ||
            "",
        },
      ],
    },
    email: {
      title: "Email",
      subtitle: "Edit your email",
      fields: [
        {
          label: "Email",
          placeholder: data.profile.email || "",
        },
      ],
    },
    password: {
      title: "Password",
      subtitle: "Edit your password",
      fields: [
        {
          label: "Password",
          placeholder: data.profile.password || "",
        },
      ],
    },
    program: {
      title: "Program",
      subtitle: "Edit your program",
      fields: [
        {
          label: "Program",
          placeholder: data.profile.program || "",
        },
      ],
    },
    address: {
      title: "Address",
      subtitle:
        "Edit the street, postal code, and province/state you currently reside at",
      fields: [
        {
          label: "Street",
          placeholder: data.profile.address.streetAddress || "",
        },
        {
          label: "Postal Code",
          placeholder: data.profile.address.postalCode || "",
        },
        {
          label: "Province/State",
          placeholder: data.profile.address.province || "",
        },
      ],
    },
    phone: {
      title: "Phone Number",
      subtitle: "Edit your phone number",
      fields: [
        {
          label: "Phone Number",
          placeholder: data.profile.phone_number || "",
        },
      ],
    },
  };

  return accSettingsData;
}