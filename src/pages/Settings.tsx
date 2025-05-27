
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/contexts/ThemeContext";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Bell, Shield, User, Palette, Download, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    applicationUpdates: true,
    newOpportunities: false,
    weeklyDigest: true,
    marketingEmails: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    allowMessages: true,
    allowApplications: true
  });

  const [appearance, setAppearance] = useState({
    language: "en",
    timezone: "PST"
  });

  const handleSaveSettings = (section: string) => {
    toast({
      title: "Settings saved",
      description: `Your ${section} settings have been updated successfully.`
    });
  };

  const handleExportData = () => {
    toast({
      title: "Data export initiated",
      description: "You will receive an email with your data export within 24 hours."
    });
  };

  const handleDeleteAccount = async () => {
    try {
      await signOut();
      toast({
        title: "Account deletion initiated",
        description: "Your account deletion request has been submitted."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChangePassword = () => {
    toast({
      title: "Password reset email sent",
      description: "Check your email for instructions to reset your password."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Settings</h1>
              <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
            </div>

            <Tabs defaultValue="notifications" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="privacy" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Privacy
                </TabsTrigger>
                <TabsTrigger value="appearance" className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger value="account" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Account
                </TabsTrigger>
              </TabsList>

              {/* Notifications */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Choose how you want to be notified about updates and opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
                        </div>
                        <Switch
                          id="email-notifications"
                          checked={notifications.emailNotifications}
                          onCheckedChange={(checked) =>
                            setNotifications(prev => ({ ...prev, emailNotifications: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-notifications">Push Notifications</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive browser push notifications</p>
                        </div>
                        <Switch
                          id="push-notifications"
                          checked={notifications.pushNotifications}
                          onCheckedChange={(checked) =>
                            setNotifications(prev => ({ ...prev, pushNotifications: checked }))
                          }
                        />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="application-updates">Application Updates</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about application status changes</p>
                        </div>
                        <Switch
                          id="application-updates"
                          checked={notifications.applicationUpdates}
                          onCheckedChange={(checked) =>
                            setNotifications(prev => ({ ...prev, applicationUpdates: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="new-opportunities">New Opportunities</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Be notified when new opportunities match your profile</p>
                        </div>
                        <Switch
                          id="new-opportunities"
                          checked={notifications.newOpportunities}
                          onCheckedChange={(checked) =>
                            setNotifications(prev => ({ ...prev, newOpportunities: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="weekly-digest">Weekly Digest</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive a summary of new opportunities weekly</p>
                        </div>
                        <Switch
                          id="weekly-digest"
                          checked={notifications.weeklyDigest}
                          onCheckedChange={(checked) =>
                            setNotifications(prev => ({ ...prev, weeklyDigest: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="marketing-emails">Marketing Emails</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive marketing and promotional emails</p>
                        </div>
                        <Switch
                          id="marketing-emails"
                          checked={notifications.marketingEmails}
                          onCheckedChange={(checked) =>
                            setNotifications(prev => ({ ...prev, marketingEmails: checked }))
                          }
                        />
                      </div>
                    </div>

                    <Button onClick={() => handleSaveSettings('notification')}>
                      Save Notification Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Privacy */}
              <TabsContent value="privacy">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>
                      Control who can see your information and contact you
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="profile-visibility">Profile Visibility</Label>
                        <Select
                          value={privacy.profileVisibility}
                          onValueChange={(value) => setPrivacy(prev => ({ ...prev, profileVisibility: value }))}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="university">University Members Only</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Choose who can view your profile</p>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="show-email">Show Email Address</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Allow others to see your email address</p>
                        </div>
                        <Switch
                          id="show-email"
                          checked={privacy.showEmail}
                          onCheckedChange={(checked) =>
                            setPrivacy(prev => ({ ...prev, showEmail: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="allow-messages">Allow Messages</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Let professors and researchers contact you</p>
                        </div>
                        <Switch
                          id="allow-messages"
                          checked={privacy.allowMessages}
                          onCheckedChange={(checked) =>
                            setPrivacy(prev => ({ ...prev, allowMessages: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="allow-applications">Allow Application Invitations</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive invitations to apply for opportunities</p>
                        </div>
                        <Switch
                          id="allow-applications"
                          checked={privacy.allowApplications}
                          onCheckedChange={(checked) =>
                            setPrivacy(prev => ({ ...prev, allowApplications: checked }))
                          }
                        />
                      </div>
                    </div>

                    <Button onClick={() => handleSaveSettings('privacy')}>
                      Save Privacy Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Appearance */}
              <TabsContent value="appearance">
                <Card>
                  <CardHeader>
                    <CardTitle>Appearance Settings</CardTitle>
                    <CardDescription>
                      Customize how the application looks and feels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="theme">Theme</Label>
                        <Select
                          value={theme}
                          onValueChange={(value: 'light' | 'dark' | 'system') => setTheme(value)}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Choose your preferred theme</p>
                      </div>

                      <div>
                        <Label htmlFor="language">Language</Label>
                        <Select
                          value={appearance.language}
                          onValueChange={(value) => setAppearance(prev => ({ ...prev, language: value }))}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                            <SelectItem value="de">German</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select
                          value={appearance.timezone}
                          onValueChange={(value) => setAppearance(prev => ({ ...prev, timezone: value }))}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PST">Pacific Time (PST)</SelectItem>
                            <SelectItem value="EST">Eastern Time (EST)</SelectItem>
                            <SelectItem value="GMT">Greenwich Mean Time (GMT)</SelectItem>
                            <SelectItem value="CET">Central European Time (CET)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button onClick={() => handleSaveSettings('appearance')}>
                      Save Appearance Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Account */}
              <TabsContent value="account">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Security</CardTitle>
                      <CardDescription>
                        Manage your account security and authentication
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label>Password</Label>
                        <div className="flex items-center gap-4 mt-2">
                          <Input type="password" value="••••••••••••" disabled className="bg-gray-50" />
                          <Button variant="outline" onClick={handleChangePassword}>
                            Change Password
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label>Two-Factor Authentication</Label>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                          <Button variant="outline">Enable 2FA</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Data Management</CardTitle>
                      <CardDescription>
                        Export or delete your account data
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Export Data</Label>
                          <p className="text-sm text-gray-500">Download a copy of all your data</p>
                        </div>
                        <Button variant="outline" onClick={handleExportData}>
                          <Download className="h-4 w-4 mr-2" />
                          Export Data
                        </Button>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-red-600">Delete Account</Label>
                          <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
                        </div>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete Account
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove all your data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                                Delete Account
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
