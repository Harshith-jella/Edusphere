
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProjectFiltersProps {
  onFieldChange: (field: string) => void;
  onFundingChange: (funding: string) => void;
}

export function ProjectFilters({ onFieldChange, onFundingChange }: ProjectFiltersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Field</label>
          <Select onValueChange={onFieldChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select field" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Fields</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Physics">Physics</SelectItem>
              <SelectItem value="Biology">Biology</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Funding</label>
          <Select onValueChange={onFundingChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select funding type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Funding Types</SelectItem>
              <SelectItem value="Funded">Fully Funded</SelectItem>
              <SelectItem value="Partially Funded">Partially Funded</SelectItem>
              <SelectItem value="Unfunded">Unfunded</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
