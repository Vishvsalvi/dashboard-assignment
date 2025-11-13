import { UserRound, Mail, Phone, MapPin, Calendar, PencilLine } from 'lucide-react'
import avatar from '../assets/avatar.png'
import { PageContainer, Section, SectionHeader, Button, Avatar, StatCard } from '../components/common'

const Profile = () => {
  return (
    <PageContainer>
      <div className="flex-1 space-y-6">
        {/* Profile Header */}
        <Section>
          <SectionHeader
            title="My Profile"
          >
            <Button leftIcon={<PencilLine className="w-4 h-4" />}>
              Edit Profile
            </Button>
          </SectionHeader>

          {/* Profile Info */}
          <div className="flex flex-col items-center mb-8">
            <Avatar src={avatar} alt="avatar" size="lg" className="mb-4" />
            <h2 className="text-2xl text-gray-800 mb-2">Jen Nelson</h2>
            <p className="text-gray-600">Fitness Influencer & Content Creator</p>
          </div>

          {/* Profile Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <Mail className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800">jennelsonfitness@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <Phone className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-800">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-800">Los Angeles, CA</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="text-gray-800">January 2024</p>
              </div>
            </div>
          </div>

          {/* Account Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <StatCard
              icon={<UserRound className="w-8 h-8" />}
              value="1,250"
              label="Followers"
              bgColor="bg-blue-50"
              iconColor="text-blue-600"
            />
            <StatCard
              icon={<Mail className="w-8 h-8" />}
              value="89"
              label="Posts"
              bgColor="bg-green-50"
              iconColor="text-green-600"
            />
            <StatCard
              icon={<Calendar className="w-8 h-8" />}
              value="156"
              label="Days Active"
              bgColor="bg-purple-50"
              iconColor="text-purple-600"
            />
            <StatCard
              icon={<MapPin className="w-8 h-8" />}
              value="4.8"
              label="Rating"
              bgColor="bg-orange-50"
              iconColor="text-orange-600"
            />
          </div>
        </Section>
      </div>
    </PageContainer>
  )
}

export default Profile
