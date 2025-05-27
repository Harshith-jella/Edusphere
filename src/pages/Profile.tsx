
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Edit, Upload, Plus, X, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Experience {
  id: number;
  title: string;
  organization: string;
  duration: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
}

interface Skill {
  id: number;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

const Profile = () => {
  const { profile } = useAuth();
  const { toast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: profile?.full_name || "",
    email: profile?.email || "",
    bio: "Passionate computer science student interested in AI and machine learning research.",
    location: "San Francisco, CA",
    university: "Stanford University",
    major: "Computer Science",
    year: "Junior",
    gpa: "3.8",
    website: "https://portfolio.example.com",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example"
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      title: "Research Assistant",
      organization: "AI Lab, Stanford University",
      duration: "Jan 2024 - Present",
      description: "Working on natural language processing research projects under Prof. Smith."
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      year: "2022 - 2026",
      gpa: "3.8"
    }
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "Python", level: "Advanced" },
    { id: 2, name: "Machine Learning", level: "Intermediate" },
    { id: 3, name: "React", level: "Intermediate" },
    { id: 4, name: "Data Analysis", level: "Advanced" }
  ]);

  const [newSkill, setNewSkill] = useState("");

  const profileCompletion = 75;

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated."
    });
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills(prev => [...prev, {
        id: Date.now(),
        name: newSkill,
        level: "Beginner"
      }]);
      setNewSkill("");
    }
  };

  const removeSkill = (id: number) => {
    setSkills(prev => prev.filter(skill => skill.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Profile</h1>
              <p className="text-gray-600">Manage your personal information and academic profile</p>
            </div>

            {/* Profile Completion */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Profile Completion</span>
                  <span className="text-sm text-gray-600">{profileCompletion}%</span>
                </div>
                <Progress value={profileCompletion} className="mb-2" />
                <p className="text-sm text-gray-500">Complete your profile to increase visibility to professors and researchers</p>
              </CardContent>
            </Card>

            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your personal details and contact information</CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                      >
                        {isEditing ? "Save Changes" : <><Edit className="h-4 w-4 mr-2" /> Edit</>}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&fit=crop&crop=face" />
                        <AvatarFallback>
                          {profileData.fullName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Change Photo
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          value={profileData.fullName}
                          onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e.target.value }))}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          value={profileData.email}
                          disabled
                          className="bg-gray-50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={profileData.website}
                          onChange={(e) => setProfileData(prev => ({ ...prev, website: e.target.value }))}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                        disabled={!isEditing}
                        rows={4}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={profileData.linkedin}
                          onChange={(e) => setProfileData(prev => ({ ...prev, linkedin: e.target.value }))}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          value={profileData.github}
                          onChange={(e) => setProfileData(prev => ({ ...prev, github: e.target.value }))}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Academic Information */}
              <TabsContent value="academic">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Information</CardTitle>
                    <CardDescription>Your educational background and academic achievements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="university">University</Label>
                        <Input id="university" value={profileData.university} disabled />
                      </div>
                      <div>
                        <Label htmlFor="major">Major</Label>
                        <Input id="major" value={profileData.major} disabled />
                      </div>
                      <div>
                        <Label htmlFor="year">Academic Year</Label>
                        <Input id="year" value={profileData.year} disabled />
                      </div>
                      <div>
                        <Label htmlFor="gpa">GPA</Label>
                        <Input id="gpa" value={profileData.gpa} disabled />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium">Education History</h3>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Education
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {education.map((edu) => (
                          <Card key={edu.id}>
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{edu.degree}</h4>
                                  <p className="text-sm text-gray-600">{edu.institution}</p>
                                  <p className="text-sm text-gray-500">{edu.year} {edu.gpa && `• GPA: ${edu.gpa}`}</p>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Experience */}
              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Experience</CardTitle>
                        <CardDescription>Your research, work, and project experience</CardDescription>
                      </div>
                      <Button variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {experiences.map((exp) => (
                        <Card key={exp.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-medium">{exp.title}</h4>
                                <p className="text-sm text-gray-600">{exp.organization}</p>
                                <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                                <p className="text-sm">{exp.description}</p>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Expertise</CardTitle>
                    <CardDescription>Showcase your technical and research skills</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a new skill..."
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <Button onClick={addSkill}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill.id}
                          variant="outline"
                          className="flex items-center gap-2 py-1 px-3"
                        >
                          <span>{skill.name}</span>
                          <span className="text-xs">({skill.level})</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeSkill(skill.id)}
                            className="h-4 w-4 p-0 hover:bg-transparent"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
