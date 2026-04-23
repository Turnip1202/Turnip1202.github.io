import React, { useMemo } from 'react';
import { Card, Row, Col, Typography, Empty, Popconfirm } from 'antd';
import { FolderOutlined, HeartOutlined, HeartFilled, StarOutlined } from '@ant-design/icons';
import type { LinkCategory, Link } from '@/types';
import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';

const { Title, Text } = Typography;

interface LinkCardProps {
  link: Link;
  isDark: boolean;
  onToggleFavorite: (linkId: number) => void;
}

const LinkCard: React.FC<LinkCardProps> = React.memo(({ link, isDark, onToggleFavorite }) => {
  const cardStyle: React.CSSProperties = {
    textAlign: 'center',
    height: '100%',
    minHeight: '7.5rem',
    borderRadius: designTokens.borderRadius.lg,
    background: isDark 
      ? 'rgba(255, 255, 255, 0.08)' 
      : 'rgba(255, 255, 255, 0.8)',
    border: `1px solid ${isDark 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(255, 255, 255, 0.3)'}`,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    marginBottom: '0.75rem',
    display: 'block',
    filter: 'drop-shadow(0 0.125rem 0.25rem rgba(0, 0, 0, 0.1))',
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    window.open(link.url, '_blank', 'noopener noreferrer');
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Card
      hoverable
      style={cardStyle}
      styles={{
        body: { padding: '1.5rem 1rem' },
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLElement;
        target.style.transform = 'translateY(-0.25rem) scale(1.02)';
        target.style.boxShadow = isDark
          ? '0 0.75rem 2rem rgba(255, 255, 255, 0.1), 0 0.25rem 1rem rgba(0, 0, 0, 0.1)'
          : '0 0.75rem 2rem rgba(74, 144, 226, 0.15), 0 0.25rem 1rem rgba(0, 0, 0, 0.1)';
        target.style.background = isDark
          ? 'rgba(255, 255, 255, 0.12)'
          : 'rgba(255, 255, 255, 0.95)';
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLElement;
        target.style.transform = 'translateY(0) scale(1)';
        target.style.boxShadow = 'none';
        target.style.background = isDark
          ? 'rgba(255, 255, 255, 0.08)'
          : 'rgba(255, 255, 255, 0.8)';
      }}
      onClick={handleLinkClick}
      actions={[
        <Popconfirm
          key="favorite"
          title={link.favorite ? "取消收藏此链接？" : "收藏此链接？"}
          onConfirm={(e) => {
            if (e) e.stopPropagation();
            onToggleFavorite(link.id);
          }}
          okText="确定"
          cancelText="取消"
        >
          <span onClick={handleFavoriteClick}>
            {
              link.favorite ? (
                <HeartFilled 
                  style={{ 
                    color: '#ff4d4f',
                    fontSize: '16px',
                    cursor: 'pointer'
                  }} 
                />
              ) : (
                <HeartOutlined 
                  style={{ 
                    color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#999',
                    fontSize: '16px',
                    cursor: 'pointer'
                  }} 
                />
              )
            }
          </span>
        </Popconfirm>
      ]}
    >
      <span style={iconStyle}>{link.icon}</span>
      <Text
        style={{
          color: isDark ? 'rgba(255, 255, 255, 0.9)' : '#555555',
          fontWeight: 500,
        }}
      >
        {link.name}
      </Text>
    </Card>
  );
});

LinkCard.displayName = 'LinkCard';

interface CategorySectionProps {
  category: LinkCategory;
  isDark: boolean;
  animationDelay: string;
  onToggleFavorite: (categoryId: number, linkId: number) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, isDark, animationDelay, onToggleFavorite }) => {
  const sectionStyle: React.CSSProperties = {
    margin: '2.5rem 0',
    animation: `categoryFadeIn 0.8s ease-out ${animationDelay} both`,
  };

  const titleStyle: React.CSSProperties = {
    color: isDark ? '#ffffff' : '#2c3e50',
    fontSize: '1.4rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    padding: '0.75rem 1rem',
    background: isDark 
      ? 'rgba(255, 255, 255, 0.08)' 
      : 'rgba(255, 255, 255, 0.6)',
    borderRadius: designTokens.borderRadius.md,
    borderLeft: `0.25rem solid ${designTokens.colors.primary}`,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  };

  return (
    <section style={sectionStyle}>
      <style>
        {`
          @keyframes categoryFadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div style={titleStyle}>
        <FolderOutlined style={{ marginRight: '8px' }} />
        {category.name}
      </div>
      <Row gutter={[16, 16]}>
        {category.links.map((link) => (
          <Col key={link.id} xs={12} sm={8} md={6} lg={4} xl={3}>
            <LinkCard 
              link={link} 
              isDark={isDark} 
              onToggleFavorite={(linkId) => onToggleFavorite(category.id, linkId)} 
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

interface LinkGridProps {
  categories: LinkCategory[];
  onToggleFavorite?: (categoryId: number, linkId: number) => void;
}

export const LinkGrid: React.FC<LinkGridProps> = ({ categories, onToggleFavorite }) => {
  const { isDark } = useThemeContext();

  const { sortedCategories, favoriteCategory } = useMemo(() => {
    // 收集所有收藏的链接
    const favoriteLinks: Link[] = [];
    const categoryIdMap = new Map<number, number>();
    
    categories.forEach(category => {
      category.links.forEach(link => {
        if (link.favorite) {
          favoriteLinks.push(link);
          // 记录链接所属的原始分类ID
          categoryIdMap.set(link.id, category.id);
        }
      });
    });

    // 创建收藏分类（如果有收藏链接）
    let favoriteCategory: LinkCategory | null = null;
    if (favoriteLinks.length > 0) {
      favoriteCategory = {
        id: -1, // 使用负数ID避免与真实分类冲突
        name: '⭐ 收藏',
        links: favoriteLinks
      };
    }

    // 排序真实分类
    const sortedCategories = [...categories].sort((a, b) => a.id - b.id);

    return { sortedCategories, favoriteCategory };
  }, [categories]);

  // 处理收藏链接的切换（需要找到原始分类）
  const handleFavoriteToggle = (categoryId: number, linkId: number) => {
    if (!onToggleFavorite) return;
    
    if (categoryId === -1) {
      // 收藏分类中的链接，需要找到原始分类
      const originalCategoryId = categories.find(cat => 
        cat.links.some(link => link.id === linkId)
      )?.id;
      
      if (originalCategoryId) {
        onToggleFavorite(originalCategoryId, linkId);
      }
    } else {
      // 普通分类中的链接
      onToggleFavorite(categoryId, linkId);
    }
  };

  // 检查是否有内容（收藏分类或普通分类）
  const hasContent = favoriteCategory || sortedCategories.length > 0;

  if (!hasContent) {
    return (
      <Empty
        description="暂无链接分类"
        style={{ margin: '40px 0' }}
      />
    );
  }

  return (
    <>
      {favoriteCategory && (
        <CategorySection
          key={favoriteCategory.id}
          category={favoriteCategory}
          isDark={isDark}
          animationDelay="0.5s"
          onToggleFavorite={handleFavoriteToggle}
        />
      )}
      {sortedCategories.map((category, index) => (
        <CategorySection
          key={category.id}
          category={category}
          isDark={isDark}
          animationDelay={`${0.6 + index * 0.1}s`}
          onToggleFavorite={onToggleFavorite || (() => {})}
        />
      ))}
    </>
  );
};

export default LinkGrid;
