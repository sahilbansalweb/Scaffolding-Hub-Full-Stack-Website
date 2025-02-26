import { useRouter } from "next/router";

export default function AdminDashboard() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin/login");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <a href="/admin/blogs">Manage Blogs</a>
        <a href="/admin/products">Manage Products</a>
        <a href="/admin/messages">View Messages</a>
        <a href="/admin/users">Manage Users</a>
        <a href="/admin/settings">Settings</a>
      </nav>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
