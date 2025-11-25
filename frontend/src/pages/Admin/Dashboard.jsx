import { useEffect, useState } from "react";
import { Menu, X, Trash2, Eye, Search, Check, Power } from "lucide-react";
const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLogoutModel, setShowLogoutModel] = useState(false);
  const [formData, setFormData] = useState({});

  const [projects, setProjects] = useState([{}]);
  const [scheduleCalls, setScheduleCalls] = useState([{}]);
  const [newsLetters, setNewsLetters] = useState([{}]);
  const [contacts, setContacts] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = await response.json();
        setProjects(data.projects);
        setScheduleCalls(data.scheduleCalls);
        setNewsLetters(data.newsLetters);
        setContacts(data.contacts);
      } catch (error) {
        console.log(error);
        window.location.href = "/login";
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("adminToken");
      window.location.href = "/admin/login";
    } catch (error) {
      alert("Cannot Logout: ", error);
    }
  };

  const tabs = [
    { id: "projects", label: "Projects", count: projects?.length || 0 },
    { id: "calls", label: "Schedule Calls", count: scheduleCalls?.length || 0 },
    { id: "newsletter", label: "Newsletter", count: newsLetters?.length || 0 },
    { id: "contacts", label: "Contacts", count: contacts?.length || 0 },
  ];

  const handleView = (item) => {
    setSelectedItem(item);
    setFormData(item);
    setShowModal(true);
  };
  const handleReview = async (id, apiName, apiId, setMethod) => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/admin/${apiName}?${apiId}=${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("adminToken"),
          },
        }
      );

      if (!res.ok) return;

      // Update UI locally
      setMethod((prev) =>
        prev.map((p) => (p._id === id ? { ...p, reviewed: !p.reviewed } : p))
      );
    } catch (error) {
      console.error("Review toggle failed:", error);
    }
  };

  const handleDelete = async (id, apiName, apiId, setMethod) => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/admin/${apiName}?${apiId}=${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("adminToken"),
          },
        }
      );
      if (!res.ok) return;

      setMethod((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error(`Delete Failed`, error);
    }
  };

  const ProjectsTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Location
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Budget
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return project._id ? (
              <tr
                key={project._id || `temp-${index}`}
                className={`${
                  project.reviewed ? "line-through" : ""
                } border-b hover:bg-gray-50`}
              >
                <td className="px-6 py-4 text-sm">{project.fullName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <a href={`mailto:${project.email}`} target="_blank">
                    {project.email}
                  </a>
                </td>
                <td className="px-6 py-4 text-sm">{project.title}</td>
                <td className="px-6 py-4 text-sm">{project.location}</td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600">
                  {project.budget}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleView(project)}
                      className="cursor-pointer p-2 hover:bg-blue-100 rounded"
                    >
                      <Eye size={16} className="text-blue-600" />
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          project._id,
                          "project-delete",
                          "projectId",
                          setProjects
                        )
                      }
                      className="cursor-pointer p-2 hover:bg-red-100 rounded"
                    >
                      <Trash2 size={16} className="text-red-600" />
                    </button>

                    <button
                      onClick={() =>
                        handleReview(
                          project._id,
                          "project-review",
                          "projectId",
                          setProjects
                        )
                      }
                      className={`cursor-pointer p-2 rounded ${
                        project.reviewed
                          ? "hover:bg-red-100"
                          : "hover:bg-green-100"
                      }`}
                    >
                      {project.reviewed ? (
                        <X size={16} className="text-red-600" />
                      ) : (
                        <Check size={16} className="text-green-600" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              ""
            );
          })}
        </tbody>
      </table>
    </div>
  );

  const CallsTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Time</th>
            <th className="px-6 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {scheduleCalls.map((call) => {
            return call._id ? (
              <tr
                key={call._id}
                className={`border-b hover:bg-gray-50 ${
                  call.reviewed ? "line-through" : ""
                }`}
              >
                <td className="px-6 py-4 text-sm">{call.userInfo.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {call.userInfo.email}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {call.callType}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{call.date}</td>
                <td className="px-6 py-4 text-sm">{call.time}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleView(call)}
                      className="cursor-pointer p-2 hover:bg-blue-100 rounded"
                    >
                      <Eye size={16} className="text-blue-600" />
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(
                          call._id,
                          "call-delete",
                          "callId",
                          setScheduleCalls
                        )
                      }
                      className="cursor-pointer p-2 hover:bg-red-100 rounded"
                    >
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                    <button
                      onClick={() =>
                        handleReview(
                          call._id,
                          "call-review",
                          "callId",
                          setScheduleCalls
                        )
                      }
                      className={`cursor-pointer p-2 rounded ${
                        call.reviewed
                          ? "hover:bg-red-100"
                          : "hover:bg-green-100"
                      }`}
                    >
                      {call.reviewed ? (
                        <X size={16} className="text-red-600" />
                      ) : (
                        <Check size={16} className="text-green-600" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              ""
            );
          })}
        </tbody>
      </table>
    </div>
  );

  const NewsletterTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {newsLetters.map((letter) => {
            return letter._id ? (
              <tr key={letter._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{letter.email}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() =>
                      handleDelete(
                        letter._id,
                        "newsletter-delete",
                        "newsLetterId",
                        setNewsLetters
                      )
                    }
                    className="p-2 hover:bg-red-100 rounded cursor-pointer"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </button>
                </td>
              </tr>
            ) : (
              ""
            );
          })}
        </tbody>
      </table>
    </div>
  );

  const ContactsTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Service
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Company
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return contact._id ? (
              <tr
                key={contact._id}
                className={`border-b hover:bg-gray-50 ${
                  contact.reviewed ? "line-through" : ""
                }`}
              >
                <td className="px-6 py-4 text-sm">{contact.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {contact.email}
                </td>
                <td className="px-6 py-4 text-sm">{contact.service}</td>
                <td className="px-6 py-4 text-sm">{contact.company}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleView(contact)}
                      className="p-2 cursor-pointer hover:bg-blue-100 rounded"
                    >
                      <Eye size={16} className="text-blue-600" />
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(
                          contact._id,
                          "contact-delete",
                          "contactId",
                          setContacts
                        )
                      }
                      className="p-2 cursor-pointer hover:bg-red-100 rounded"
                    >
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                    <button
                      onClick={() =>
                        handleReview(
                          contact._id,
                          "contact-review",
                          "contactId",
                          setContacts
                        )
                      }
                      className={`cursor-pointer p-2 rounded ${
                        contact.reviewed
                          ? "hover:bg-red-100"
                          : "hover:bg-green-100"
                      }`}
                    >
                      {contact.reviewed ? (
                        <X size={16} className="text-red-600" />
                      ) : (
                        <Check size={16} className="text-green-600" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              ""
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-gray-800 rounded"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="flex-1 px-2 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded transition ${
                activeTab === tab.id ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
            >
              {sidebarOpen ? (
                <div className="flex justify-between items-center">
                  <span>{tab.label}</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                    {tab.count}
                  </span>
                </div>
              ) : (
                <div className="text-center text-xs">{tab.count}</div>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {tabs.find((t) => t.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700"
              onClick={() => setShowLogoutModel(true)}
            >
              <Power size={18} />
              Log Out
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="bg-white rounded-lg shadow">
            {activeTab === "projects" && <ProjectsTable />}
            {activeTab === "calls" && <CallsTable />}
            {activeTab === "newsletter" && <NewsletterTable />}
            {activeTab === "contacts" && <ContactsTable />}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-96 overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Item Details</h3>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {JSON.stringify(selectedItem, null, 2)}
            </pre>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* LogOut Model */}
      {showLogoutModel && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          {/* Modal Container */}
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 animate-fadeIn">
            {/* Header */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Confirm Logout
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out? You'll need to log back in to
              access your account.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-evenly">
              <button
                onClick={() => setShowLogoutModel(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium cursor-pointer"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
