
import { useAuth } from "@/hooks/useAuth";
import StudentDashboard from "./StudentDashboard";
import ProfessorDashboard from "./ProfessorDashboard";

export function RoleDashboard() {
  const { profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-edu-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Profile Not Found</h2>
          <p className="text-gray-600">Unable to load your profile. Please try logging in again.</p>
        </div>
      </div>
    );
  }

  if (profile.role === 'professor') {
    return <ProfessorDashboard />;
  }

  return <StudentDashboard />;
}
