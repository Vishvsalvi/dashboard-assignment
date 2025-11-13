import { Image, Plus } from 'lucide-react'
import { PageContainer, Section, SectionHeader, Button, GridContainer } from '../components/common'

const Posts = () => {
  return (
    <PageContainer>
      <div className="flex-1 space-y-6">
        {/* Posts Header */}
        <Section>
          <SectionHeader
            title="My Posts"
          >
            <Button leftIcon={<Plus className="w-4 h-4" />}>
              Create Post
            </Button>
          </SectionHeader>

          {/* Posts Grid Placeholder */}
          <GridContainer>
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <div key={post} className="border border-gray-200 rounded-xl p-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <Image className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Post Title {post}</h3>
                <p className="text-gray-600 text-sm">This is a placeholder for post content. Lorem ipsum dolor sit amet...</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">Posted 2 days ago</span>
                  <span className="text-xs text-purple-600">100 views</span>
                </div>
              </div>
            ))}
          </GridContainer>
        </Section>
      </div>
    </PageContainer>
  )
}

export default Posts
