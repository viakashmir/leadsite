import { redirect } from "next/navigation";

// Old admin sign-in URL: everyone now signs in at /login, and admins are
// recognised by their email.
export default function AdminLoginRedirect() {
  redirect("/login");
}
